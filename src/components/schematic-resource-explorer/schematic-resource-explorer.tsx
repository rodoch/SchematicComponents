import { Component, State, Element, Prop, Method } from '@stencil/core';

@Component({
    tag: 'schematic-resource-explorer'
})

export class ResourceExplorer {
    @State() loading: boolean;
    @State() html: string;
    @Prop() url: string;

    @Element() explorer: HTMLStencilElement;

    @Method()
    clearResourceList() {
        while (this.explorer.hasChildNodes()) {
            this.explorer.removeChild(this.explorer.lastChild);
        }
    }

    @Method()
    listResources(url: string, formData: FormData = new FormData()) {
        this.setLoadingState(true);
        fetch(url, {
            method: 'post',
            body: formData,
            credentials: "same-origin"
        }).then(response => {
            this.setLoadingState(false);
            if (response.ok) {
                response.text().then(text => {
                    this.updateResourceList(text);
                });
            } else {
                let status: number = response.status;
                let error: string = response.statusText;
                console.error(status + ': ' + error);
                this.updateResourceListError();
            }
        }).catch(error => {
            this.setLoadingState(false);
            console.error(error);
        });
    }

    updateResourceList(html: string){
        this.html = html;
    }

    updateResourceListError() {
        this.clearResourceList();
    }

    setLoadingState(state: boolean) {
        this.loading = state;
    }

    componentWillLoad() {
        this.listResources(this.url);
    }
    
    render() {
        if (this.loading == true)
        {
            return (
                <p>Loading</p>
            );
        } else {
            return (
                <div innerHTML={this.html}></div>
            );
        }
    }
}