import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { ResourceButton } from '../../interfaces/ResourceButton';

@Component({
    tag: 'schematic-resource-button-new'
})

export class ResourceButtonNew {
    @Event() getNewResource: EventEmitter;
    @Prop() inProgress: string;
    @Prop() completed: string;

    newButton(event: UIEvent) {
        event.preventDefault();

        const newAction: ResourceButton = {
            inProgress: this.inProgress, 
            completed: this.completed
        };

        this.getNewResource.emit(newAction);
    }

    render() {
        return (
            <li class="resource-toolbar__item">
                <button onClick={(event: UIEvent) => this.newButton(event)}>
                    <slot/>
                </button>
            </li>
        );
    }
}