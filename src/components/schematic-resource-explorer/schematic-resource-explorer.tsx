import { Component, Element, Listen } from '@stencil/core';

@Component({
    tag: 'schematic-resource-explorer'
})

export class ResourceExplorer {
    @Element() explorer: HTMLStencilElement;

    componentWillLoad() {
        (window as any).onpopstate = (event) => {
            if (event.state) {
                this.populate(event.state.resourceId);
            }
        };
    }

    @Listen('activeResourceSet')
    onActiveResourceSet(event: CustomEvent) {
        const resourceId = event.detail;
        this.populate(resourceId);
        this.updateHistory(resourceId);
    }

    @Listen('getNewResource')
    onGetNewResource() {
        const list = this.explorer.querySelector('schematic-resource-list');
        if (list) {
            list.newResource();
            this.updateHistoryNewResource();
        }
    }

    @Listen('resourceRefresh')
    onResourceRefresh(event: CustomEvent) {
        let resourceId: string = "0";

        if (event.detail) {
            resourceId = event.detail;
        }

        this.populate(resourceId);

        const list = this.explorer.querySelector('schematic-resource-list');
        if (list) {
            list.listResources(list.url);
        }
        
        this.updateHistory(resourceId);
    }

    populate(resourceId: string) {
        const editor = this.explorer.querySelector('schematic-resource-editor');
        if (editor) {
            editor.resourceId = resourceId;
        }
        
        const list = this.explorer.querySelector('schematic-resource-list');
        if (list) {
            list.activeResourceId = resourceId;
        }
    }

    updateHistory(resourceId: string) {
        const title = document.querySelector('title').textContent;
        let url = location.protocol + '//' + location.host + location.pathname;
        url += "?id=" + resourceId;

        if (resourceId === "0") {
            history.replaceState({resourceId: resourceId}, title, url);
        } else {
            history.pushState({resourceId: resourceId}, title, url);
        }
    }

    updateHistoryNewResource() {
        const title = document.querySelector('title').textContent;
        let url = location.protocol + '//' + location.host + location.pathname;
        url += "?id=0";
        history.pushState({resourceId: "0"}, title, url);
    }

    render() {
        return (
            <div>
                <slot/>
            </div>
        );
    }
}