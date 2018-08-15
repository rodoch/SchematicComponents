import { Component, Element, State, Prop, Event, EventEmitter, Method } from '@stencil/core';

@Component({
    tag: 'schematic-language-button'
})

export class LanguageButton {
    @Element() button: HTMLStencilElement;
    @State() current: boolean;
    @State() href: string;
    @Prop() code: string;
    @Prop() text: string;
    @Event() toggleLanguageMenu: EventEmitter;

    componentWillLoad() {
        this.current = (this.button.getAttribute('slot') === 'current') ? true : false;
        this.setHref();
    }

    @Method()
    setHref() {
        if (this.current) {
            return;
        }

        const query: string = window.location.search;
        const path: string = window.location.pathname;
        let pathArray: string[] = path.split('/');
        pathArray[1] = this.code;
        const newPath: string = pathArray.join('/');

        let result = newPath;
        result += (query) ? query : '';
        this.href = result;
    }

    buttonPress(event: UIEvent) {
        event.preventDefault();
        this.toggleLanguageMenu.emit();
    }

    render() {
        if (this.current) {
            return(
                <button class="portal-header__button portal-header__button--language" 
                    onClick={(event) => this.buttonPress(event)}>{this.text}</button>
            );
        } else {
            return(
                <li class="lang-sub-menu__item">
                    <a class="lang-sub-menu__link" href={this.href}>{this.text}</a>
                </li>
            );
        }
    }
}