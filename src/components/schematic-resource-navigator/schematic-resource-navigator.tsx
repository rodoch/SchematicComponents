import { Component, Element } from '@stencil/core';

@Component({
    tag: 'schematic-resource-navigator'
})

export class ResourceNavigator {
    @Element() navigator: HTMLStencilElement;

    render() {
        return(
            <div class="resource-navigator">
                <slot/>
            </div>
        );
    }
}