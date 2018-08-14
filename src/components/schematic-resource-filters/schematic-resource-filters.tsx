import { Component, Element, State, Prop, Method, Watch } from '@stencil/core';

@Component({
    tag: 'schematic-resource-filters'
})

export class ResourceFilters {
    @Element() filters: HTMLStencilElement;
    @State() loading: boolean;
    @State() html: string;
    @State() filtersStatus: string;
    @State() menuOpen: boolean;
    @State() bodyClass: string;
    @Prop() url: string;
    @Prop() filter: string;
    @Prop() filtersOn: string;
    @Prop() filtersOff: string;
    @Prop() removeFilters: string = 'Remove';
    @Prop() resetFilters: string = 'Reset';
    @Prop({ mutable: true, reflectToAttr: true }) active: boolean;

    @Watch('menuOpen')
    menuStatusChanged() {
        this.bodyClass = (this.menuOpen) 
            ? 'resource-filter__body resource-filter__body--visible' 
            : 'resource-filter__body';
    }

    @Watch('active')
    filterStatusChanged() {
        this.filtersStatus = (this.active) ? this.filtersOn : this.filtersOff;
    }

    componentWillLoad() {
        this.filtersStatus = this.filtersOff;
        this.bodyClass = 'resource-filter__body';
        this.getFilters(this.url);
    }

    @Method()
    getFilters(url: string) {
        fetch(url, {
            method: 'get',
            credentials: "same-origin"
        }).then(response => {
            this.setLoadingState(false);
            if (response.ok) {
                response.text().then(text => {
                    this.updateFilters(text);
                });
            } else {
                let status: number = response.status;
                let error: string = response.statusText;
                console.error(status + ': ' + error);
                this.updateFiltersError();
            }
        }).catch(error => {
            this.setLoadingState(false);
            console.error(error);
        });
    }

    openFiltersButton(event: UIEvent) {
        event.preventDefault();
        this.menuOpen = (!this.menuOpen) ? true : false;
    }

    closeFiltersButton(event: UIEvent) {
        event.preventDefault();
        this.menuOpen = false;
    }

    removeFiltersButton(event: UIEvent) {
        event.preventDefault();
        this.active = false;
        this.listResources();
    }

    setFiltersButton(event: UIEvent) {
        event.preventDefault();
        this.active = true;
        this.listResources();
    }

    resetFiltersButton(event: UIEvent) {
        event.preventDefault();
        this.getFilters(this.url);
    }

    updateFilters(html: string) {
        this.html = html;
    }

    updateFiltersError() {}

    setLoadingState(state: boolean) {
        this.loading = state;
    }

    listResources() {
        const list = this.filters.closest('schematic-resource-navigator')
            .querySelector('schematic-resource-list');
        if (list) {
            list.listResources(list.url);
        }
    }

    render() {
        return (
            <div class="resource-filter">
                <div class="resource-filter__controls">
                    <button onClick={(event) => this.openFiltersButton(event)}>{this.filtersStatus}</button>
                    <button onClick={(event) => this.removeFiltersButton(event)}>{this.removeFilters}</button>
                </div>
                <div class={this.bodyClass}>
                    <div class="resource-filter__tools">
                        <button onClick={(event) => this.setFiltersButton(event)}>{this.filter}</button>
                        <button onClick={(event) => this.resetFiltersButton(event)}>{this.resetFilters}</button>
                        <button onClick={(event) => this.closeFiltersButton(event)}>X</button>
                    </div>
                    <div class="resource-filter__content">
                        {this.loading
                            ? <schematic-loading></schematic-loading>
                            : <div innerHTML={this.html}></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}