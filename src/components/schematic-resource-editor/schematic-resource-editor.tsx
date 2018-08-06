import { Component, Element, State, Prop, Method, Listen, Watch } from '@stencil/core';

@Component({
    tag: 'schematic-resource-editor'
})

export class ResourceEditor {
    @Element() editor: HTMLStencilElement;
    @State() loading: boolean;
    @State() html: string;
    @Prop() url: string;
    @Prop() placeholder: string;
    @Prop({ mutable: true, reflectToAttr: true }) resourceId: string;

    @Watch('resourceId')
    resourceIdChanged() {
        this.setEditor();
    }

    componentWillLoad() {
        this.setEditor();
    }
    
    @Listen('getNewResource')
    onGetNewResource() {
        this.newResource();
    }
    
    @Listen('createNewResource')
    onCreateNewResource() {
        this.createResource();
    }
    
    @Listen('updateCurrentResource')
    onUpdateCurrentResource() {
        this.updateResource(this.resourceId);
    }
    
    @Listen('deleteCurrentResouce')
    onDeleteCurrentResouce() {
        this.deleteResource(this.resourceId);
    }

    @Method()
    newResource() {
        let createUrl = this.urlBuilder("create");
        this.setLoadingState(true);

        fetch(createUrl, {
            method: 'get',
            credentials: 'same-origin'
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

    @Method()
    createResource() {
        let createUrl = this.urlBuilder("create");

        let form: HTMLFormElement = this.editor.querySelector("#resource-editor__form");
        let formData: FormData = new FormData(form);
        
        this.fetchResource(createUrl, formData);
    }

    @Method()
    readResource(id: string) {
        let readUrl = this.urlBuilder("read");

        let formData: FormData = new FormData();
        formData.append('id', id);
        
        this.resourceId = id;
        this.fetchResource(readUrl, formData);
    }

    @Method()
    updateResource(id: string) {
        let saveUrl = this.urlBuilder("update");

        let form: HTMLFormElement = this.editor.querySelector("#resource-editor__form");
        let formData: FormData = new FormData(form);
        formData.append('id', id);
        
        this.fetchResource(saveUrl, formData);
    }

    @Method()
    deleteResource(id: string) {
        let deleteUrl = this.urlBuilder("delete");

        let form: HTMLFormElement = this.editor.querySelector("#resource-editor__form");
        let formData: FormData = new FormData(form);
        formData.append('id', id);
        
        this.fetchResource(deleteUrl, formData);
    }

    @Method()
    clearEditor() {
        while (this.editor.hasChildNodes()) {
            this.editor.removeChild(this.editor.lastChild);
        }
    }

    fetchResource(url: string, formData: FormData) {
        this.setLoadingState(true);

        fetch(url, {
            method: 'post',
            body: formData,
            credentials: 'same-origin'
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

    setEditor() {
        if (this.editorHasResource()) {
            this.readResource(this.resourceId);
        }
    }

    editorHasResource() {
        return (this.resourceId && this.resourceId !== "0") ? true : false;
    }

    setLoadingState(state: boolean) {
        this.loading = state;
    }

    urlBuilder(endpoint: string) {
        return this.enforceTrailingSlash(this.url) + endpoint;
    }

    enforceTrailingSlash(url: string) {
        return url.endsWith("/") ? "" : "/";
    }

    render() {
        if (this.editorHasResource()) {
            return (
                <div>
                    <slot/>
                    <div innerHTML={this.html}></div>
                </div>
            );
        } else {
            return (
                <div>{this.placeholder}</div>
            )
        }
    }
}