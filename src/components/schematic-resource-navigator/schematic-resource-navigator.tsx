import { Component } from '@stencil/core';

@Component({
    tag: 'schematic-resource-navigator'
})

export class ResourceNavigator {
    render() {
        return(
            <div class="resource-navigator">
                <slot/>
            </div>
        );
    }
}