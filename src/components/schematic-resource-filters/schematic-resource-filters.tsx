import { Component, Element, State, Prop, Method } from '@stencil/core';

@Component({
    tag: 'schematic-resource-filters'
})

export class ResourceFilters {
    @Element() filters: HTMLStencilElement;
    @State() loading: boolean;
    @State() html: string;
    @Prop() url: string;

    componentWillLoad() {
        this.openFilters(this.url);
    }

    @Method()
    openFilters(url: string) {
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

    @Method()
    clearFilters() {
        while (this.filters.hasChildNodes()) {
            this.filters.removeChild(this.filters.lastChild);
        }
    }

    updateFilters(html: string) {
        this.html = html;
    }

    updateFiltersError() {
        this.clearFilters();
    }

    setLoadingState(state: boolean) {
        this.loading = state;
    }

    render() {
        return (
            <div innerHTML={this.html}></div>
        );
    }
}