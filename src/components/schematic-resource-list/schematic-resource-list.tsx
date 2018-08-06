import { Component, State, Element, Prop, Listen, Method, Watch } from '@stencil/core';

@Component({
    tag: 'schematic-resource-list'
})

export class ResourceList {
    @Element() list: HTMLStencilElement;
    @State() loading: boolean;
    @State() html: string;
    @Prop() url: string;
    @Prop({ mutable: true, reflectToAttr: true }) activeResourceId: string;

    @Watch('activeResourceId')
    activeResourceChanged() {
        this.setActiveResource();
        this.updateHistory();
    }

    componentWillLoad() {
        this.listResources(this.url);
        this.updateHistory();
    }

    componentDidLoad() {
        (window as any).onpopstate = function(event) {
            // TODO: Bubble this as an event to a parent element, have it update the resouceId
            if (event.state) {
                const editor = document.querySelector('schematic-resource-editor');
                editor.resourceId = event.state.resourceId;
            }
        };
    }

    @Listen('setActiveResource')
    onResourceLinkClick(event: CustomEvent) {
        this.activeResourceId = event.detail;
    }

    updateHistory() {
        const title = document.querySelector('title').textContent;
        let url = location.protocol + '//' + location.host + location.pathname;
        url += "?id=" + this.activeResourceId;

        if (this.activeResourceId === "0") {
            history.replaceState({resourceId: this.activeResourceId}, title, url);
        } else {
            history.pushState({resourceId: this.activeResourceId}, title, url);
        }
    }

    setActiveResource() {
        const links = this.list.querySelectorAll('schematic-resource-list-link');
        for (let i = 0; i < links.length; ++i) {
            if (links[i].getAttribute('resource-id') !== this.activeResourceId) {
                links[i].setAttribute('status', '');
            }
        }
    }

    @Method()
    listResources(url: string, formData: FormData = new FormData()) {
        this.setLoadingState(true);
        formData.append('ActiveResourceID', this.activeResourceId);
        
        fetch(url, {
            method: 'post',
            body: formData,
            credentials: 'same-origin'
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

    @Method()
    clearResourceList() {
        while (this.list.hasChildNodes()) {
            this.list.removeChild(this.list.lastChild);
        }
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
    
    render() {
        if (!this.loading)
        {
            return (
                <div innerHTML={this.html}></div>
            );
        } else {
            return (
                <p>Loading</p>
            );
        }
    }
}