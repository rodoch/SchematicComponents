import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'schematic-resource-editor-status'
})

export class ResourceEditorStatus {
    @Prop() status: string;
    @Prop() message: string;

    render() {
        return (
            <li class="resource-toolbar__item resource-editor-status">
                {this.status}
            </li>
        );
    }
}