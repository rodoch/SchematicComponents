import { Component, State, Element, Prop, Method } from '@stencil/core';

@Component({
    tag: 'schematic-resource-editor'
})

export class ResourceEditor {
    @State() loading: boolean;
    @State() html: string;
    @Prop() url: string;
    @Prop() resourceId: string;

    @Element() editor: HTMLStencilElement;

    @Method()
    clearEditor() {
        while (this.editor.hasChildNodes()) {
            this.editor.removeChild(this.editor.lastChild);
        }
    }

    @Method()
    openEditor(url: string, id: string) {
        this.setLoadingState(true);

        let formData: FormData = new FormData();
        formData.append('id', id);
        
        fetch(url, {
            method: 'post',
            body: formData,
            credentials: "same-origin"
        }).then(response => {
            this.setLoadingState(false);
            if (response.ok) {
                response.text().then(text => {
                    this.updateEditor(text);
                });
            } else {
                let status: number = response.status;
                let error: string = response.statusText;
                console.error(status + ': ' + error);
                this.updateEditorError();
            }
        }).catch(error => {
            this.setLoadingState(false);
            console.error(error);
        });
    }

    updateEditor(html: string) {
        this.html = html;
    }

    updateEditorError() {
        this.clearEditor();
    }

    setLoadingState(state: boolean) {
        this.loading = state;
    }

    componentWillLoad() {
        this.openEditor(this.url, this.resourceId);
    }

    render() {
        return (
            <div innerHTML={this.html}></div>
        );
    }
}