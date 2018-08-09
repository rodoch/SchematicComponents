import { Component, Event, EventEmitter, Prop } from '@stencil/core';
import { ResourceButton } from '../../interfaces/ResourceButton';

@Component({
    tag: 'schematic-resource-button-delete'
})

export class ResourceButtonDelete {
    @Event() deleteCurrentResouce: EventEmitter;
    @Prop() inProgress: string;
    @Prop() completed: string;

    deleteButton(event: UIEvent) {
        event.preventDefault();

        const deleteAction: ResourceButton = {
            inProgress: this.inProgress, 
            completed: this.completed
        };

        this.deleteCurrentResouce.emit(deleteAction);
    }

    render() {
        return (
            <li class="resource-toolbar__item">
                <button onClick={(event: UIEvent) => this.deleteButton(event)}>
                    <slot/>
                </button>
            </li>
        );
    }
}