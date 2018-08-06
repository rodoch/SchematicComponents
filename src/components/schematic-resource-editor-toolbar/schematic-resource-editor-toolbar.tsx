import { Component, Element, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'schematic-resource-editor-toolbar'
})

export class ResourceEditorToolbar {
    @Element() toolbar: HTMLStencilElement;
    @Event() getNewResource: EventEmitter;
    @Event() createNewResource: EventEmitter;
    @Event() updateCurrentResource: EventEmitter;
    @Event() deleteCurrentResouce: EventEmitter;

    newButton(event: UIEvent) {
        event.preventDefault();
        this.getNewResource.emit();
    }

    deleteButton(event: UIEvent) {
        event.preventDefault();
        this.deleteCurrentResouce.emit();
    }

    createButton(event: UIEvent) {
        event.preventDefault();
        this.createNewResource.emit();
    }

    saveButton(event: UIEvent) {
        event.preventDefault();
        this.updateCurrentResource.emit();
    }

    render() {
        return (
            <div class="resource-toolbar">
                <ul class="resource-toolbar__list">
                    <slot/>
                    <li class="resource-toolbar__item">
                        <button onClick={(event: UIEvent) => this.newButton(event)}>Nua</button>
                    </li>
                    <li class="resource-toolbar__item">
                        <button onClick={(event: UIEvent) => this.deleteButton(event)}>Scrios</button>
                    </li>
                    <li class="resource-toolbar__item">
                        <button onClick={(event: UIEvent) => this.createButton(event)}>Cruthaigh</button>
                    </li>
                    <li class="resource-toolbar__item">
                        <button onClick={(event: UIEvent) => this.saveButton(event)}>Sábháil</button>
                    </li>
                </ul>
            </div>
        )
    }
}