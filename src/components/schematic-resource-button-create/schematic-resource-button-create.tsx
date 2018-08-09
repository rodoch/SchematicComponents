import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { ResourceButton } from '../../interfaces/ResourceButton';

@Component({
    tag: 'schematic-resource-button-create'
})

export class ResourceButtonCreate {
    @Event() createNewResource: EventEmitter;
    @Prop() inProgress: string;
    @Prop() completed: string;

    createButton(event: UIEvent) {
        event.preventDefault();

        const createAction: ResourceButton = {
            inProgress: this.inProgress, 
            completed: this.completed
        };

        this.createNewResource.emit(createAction);
    }

    render() {
        return (
            <li class="resource-toolbar__item">
                <button onClick={(event: UIEvent) => this.createButton(event)}>
                    <slot/>
                </button>
            </li>
        );
    }
}