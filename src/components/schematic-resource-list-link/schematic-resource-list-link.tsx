import { Component, Element, Prop, Event, EventEmitter, Watch } from '@stencil/core';
import scrollIntoView from 'scroll-into-view-if-needed'

@Component({
    tag: 'schematic-resource-list-link',
    styleUrl: 'schematic-resource-list-link.scss'
})

export class ResourceListLink {
    @Element() link: HTMLStencilElement;
    @Prop() resourceId: string;
    @Prop({ mutable: true, reflectToAttr: true }) status: string;
    @Event() setActiveResource: EventEmitter;

    componentDidLoad() {
        this.setActiveStatus();
    }

    @Watch('status')
    statusChanged() {
        this.setActiveStatus();
    }

    setActiveStatus() {
        const link = this.link.querySelector('.resource-list__link');
        
        if (this.status === 'active') {
            this.activateLink(link);
        } else {
            this.deactivateLink(link);
        }
    }

    activateLink(link: Element) {
        this.setActiveResource.emit(this.resourceId);
        link.classList.add('resource-list__link--active');
        scrollIntoView(this.link, {
            behavior: 'smooth',
            scrollMode: 'if-needed'
        });
    }

    deactivateLink(link: Element) {
        link.classList.remove('resource-list__link--active');
    }

    linkClick(event: UIEvent) {
        event.preventDefault();
        this.status = "active";
        this.updateEditor();
    }

    updateEditor() {
        const editor = document.querySelector('schematic-resource-editor');
        editor.setAttribute('resource-id', this.resourceId);
    }

    render() {
        return(
            <a class="resource-list__link" href="" onClick={(event: UIEvent) => this.linkClick(event)}>
                <slot/>
            </a>
        );
    }
}