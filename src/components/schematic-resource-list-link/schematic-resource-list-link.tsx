import { Component, Prop, Element } from '@stencil/core';

@Component({
    tag: 'schematic-resource-list-link',
    styleUrl: 'schematic-resource-list-link.scss'
})

export class ResourceListLink {
    @Prop() resourceId: string;
    @Prop() content: string;
    @Prop() status: string;

    @Element() link: HTMLStencilElement;

    unsetActiveResource() {
        const explorer = document.querySelector('schematic-resource-explorer');
        const resources = explorer.querySelectorAll('.resource-list__item');

        for (let i = 0; i < resources.length; ++i) {
            let resource = resources[i].querySelector('.resource-list__link');
            if (resource.classList.contains('resource-list__link--active')) {
                resource.classList.remove('resource-list__link--active');
            }
        }
    }

    setActiveResource() {
        this.unsetActiveResource();
        this.link.querySelector('.resource-list__link').classList.add('resource-list__link--active');
    }

    linkClick(event: UIEvent) {
        event.preventDefault();
        this.setActiveResource();
        const editor = document.querySelector('schematic-resource-editor');
        editor.openEditor(editor.url, this.resourceId);
    }

    render() {
        return(
            <a class="resource-list__link" href="" onClick={(event: UIEvent) => this.linkClick(event)}>{this.content}</a>
        );
    }
}