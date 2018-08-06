import { Component, Prop, State } from '@stencil/core';

@Component({
    tag: 'schematic-resource-search',
    styleUrl: 'schematic-resource-search.scss'
})

export class ResourceSearch {
    @Prop() url: string;
    @Prop() placeholder: string;
    @State() value: string;
    
    updateValue(event) {
        this.value = event.target.value;
    }

    search(event) {
        event.preventDefault();

        let formData: FormData = new FormData();
        formData.append('query', this.value);

        const list = document.querySelector('schematic-resource-list');
        list.listResources(this.url, formData);
    }

    render() {
        return (
            <div class="resource-search">
                <form onSubmit={(event) => this.search(event)}>
                    <input type="text" placeholder={this.placeholder} value={this.value} 
                        onInput={(event) => this.updateValue(event)} />
                </form>
            </div>
        );
    }
}