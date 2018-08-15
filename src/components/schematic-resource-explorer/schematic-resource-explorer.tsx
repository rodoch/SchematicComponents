import { Component, Element, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
    tag: 'schematic-resource-explorer'
})

export class ResourceExplorer {
    @Element() explorer: HTMLStencilElement;
    @State() filterIsActive: boolean;
    @State() filterMenuOpen: boolean;
    @Event() urlUpdated: EventEmitter;

    componentWillLoad() {
        this.filterIsActive = false;
        this.filterMenuOpen = false;

        (window as Window).onpopstate = (event) => {
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

    @Listen('resourceUpdated')
    onResourceUpdated() {
        const list = this.explorer.querySelector('schematic-resource-list');
        if (list) {
            list.listResources(list.url);
        }
    }

    @Listen('filterMenuToggle')
    onFilterMenuToggle() {
        this.filterMenuOpen = (!this.filterMenuOpen) ? true : false;
        this.toggleFilterMenu();
    }

    @Listen('filterStatusUpdate')
    onFilterStatusUpdate(event: CustomEvent) {
        this.filterIsActive = event.detail;
        this.toggleFilterStatus();
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

        this.urlUpdated.emit();
    }

    updateHistoryNewResource() {
        const title = document.querySelector('title').textContent;
        let url = location.protocol + '//' + location.host + location.pathname;
        url += "?id=0";
        history.pushState({resourceId: "0"}, title, url);
        this.urlUpdated.emit();
    }

    toggleFilterMenu() {
        const filters: HTMLSchematicResourceFiltersElement = this.explorer.querySelector('schematic-resource-filters');
        if (filters) {
            filters.menuOpen = this.filterMenuOpen;
        }
    }

    toggleFilterStatus() {
        const controls: HTMLSchematicResourceFilterControlsElement = this.explorer.querySelector('schematic-resource-filter-controls');
        const filters: HTMLSchematicResourceFiltersElement = this.explorer.querySelector('schematic-resource-filters');

        if (controls) {
            controls.active = this.filterIsActive;
        }

        if (filters) {
            filters.active = this.filterIsActive;
            filters.listResources();
        }
    }

    render() {
        return(
            <div class="resource-explorer">
                <slot/>
            </div>
        );
    }
}