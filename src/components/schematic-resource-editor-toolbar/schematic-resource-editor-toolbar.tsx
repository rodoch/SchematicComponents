import { Component, Element } from '@stencil/core';

@Component({
    tag: 'schematic-resource-editor-toolbar'
})

export class ResourceEditorToolbar {
    @Element() toolbar: HTMLStencilElement;

    render() {
        return (
            <div class="resource-toolbar">
                <ul class="resource-toolbar__list">
                    <slot/>
                </ul>
            </div>
        );
    }
}