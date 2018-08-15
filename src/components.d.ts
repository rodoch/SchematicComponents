/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface SchematicLanguageButton {
      'code': string;
      'setHref': () => void;
      'text': string;
    }
  }

  interface HTMLSchematicLanguageButtonElement extends StencilComponents.SchematicLanguageButton, HTMLStencilElement {}

  var HTMLSchematicLanguageButtonElement: {
    prototype: HTMLSchematicLanguageButtonElement;
    new (): HTMLSchematicLanguageButtonElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-language-button': HTMLSchematicLanguageButtonElement;
  }
  interface ElementTagNameMap {
    'schematic-language-button': HTMLSchematicLanguageButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-language-button': JSXElements.SchematicLanguageButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicLanguageButtonAttributes extends HTMLAttributes {
      'code'?: string;
      'onToggleLanguageMenu'?: (event: CustomEvent) => void;
      'text'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicLanguageSwitcher {

    }
  }

  interface HTMLSchematicLanguageSwitcherElement extends StencilComponents.SchematicLanguageSwitcher, HTMLStencilElement {}

  var HTMLSchematicLanguageSwitcherElement: {
    prototype: HTMLSchematicLanguageSwitcherElement;
    new (): HTMLSchematicLanguageSwitcherElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-language-switcher': HTMLSchematicLanguageSwitcherElement;
  }
  interface ElementTagNameMap {
    'schematic-language-switcher': HTMLSchematicLanguageSwitcherElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-language-switcher': JSXElements.SchematicLanguageSwitcherAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicLanguageSwitcherAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicLoading {

    }
  }

  interface HTMLSchematicLoadingElement extends StencilComponents.SchematicLoading, HTMLStencilElement {}

  var HTMLSchematicLoadingElement: {
    prototype: HTMLSchematicLoadingElement;
    new (): HTMLSchematicLoadingElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-loading': HTMLSchematicLoadingElement;
  }
  interface ElementTagNameMap {
    'schematic-loading': HTMLSchematicLoadingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-loading': JSXElements.SchematicLoadingAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicLoadingAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceButtonCreate {
      'completed': string;
      'inProgress': string;
    }
  }

  interface HTMLSchematicResourceButtonCreateElement extends StencilComponents.SchematicResourceButtonCreate, HTMLStencilElement {}

  var HTMLSchematicResourceButtonCreateElement: {
    prototype: HTMLSchematicResourceButtonCreateElement;
    new (): HTMLSchematicResourceButtonCreateElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-button-create': HTMLSchematicResourceButtonCreateElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-button-create': HTMLSchematicResourceButtonCreateElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-button-create': JSXElements.SchematicResourceButtonCreateAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceButtonCreateAttributes extends HTMLAttributes {
      'completed'?: string;
      'inProgress'?: string;
      'onCreateNewResource'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceButtonDelete {
      'completed': string;
      'inProgress': string;
    }
  }

  interface HTMLSchematicResourceButtonDeleteElement extends StencilComponents.SchematicResourceButtonDelete, HTMLStencilElement {}

  var HTMLSchematicResourceButtonDeleteElement: {
    prototype: HTMLSchematicResourceButtonDeleteElement;
    new (): HTMLSchematicResourceButtonDeleteElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-button-delete': HTMLSchematicResourceButtonDeleteElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-button-delete': HTMLSchematicResourceButtonDeleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-button-delete': JSXElements.SchematicResourceButtonDeleteAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceButtonDeleteAttributes extends HTMLAttributes {
      'completed'?: string;
      'inProgress'?: string;
      'onDeleteCurrentResouce'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceButtonNew {
      'completed': string;
      'inProgress': string;
    }
  }

  interface HTMLSchematicResourceButtonNewElement extends StencilComponents.SchematicResourceButtonNew, HTMLStencilElement {}

  var HTMLSchematicResourceButtonNewElement: {
    prototype: HTMLSchematicResourceButtonNewElement;
    new (): HTMLSchematicResourceButtonNewElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-button-new': HTMLSchematicResourceButtonNewElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-button-new': HTMLSchematicResourceButtonNewElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-button-new': JSXElements.SchematicResourceButtonNewAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceButtonNewAttributes extends HTMLAttributes {
      'completed'?: string;
      'inProgress'?: string;
      'onGetNewResource'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceButtonSave {
      'completed': string;
      'inProgress': string;
    }
  }

  interface HTMLSchematicResourceButtonSaveElement extends StencilComponents.SchematicResourceButtonSave, HTMLStencilElement {}

  var HTMLSchematicResourceButtonSaveElement: {
    prototype: HTMLSchematicResourceButtonSaveElement;
    new (): HTMLSchematicResourceButtonSaveElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-button-save': HTMLSchematicResourceButtonSaveElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-button-save': HTMLSchematicResourceButtonSaveElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-button-save': JSXElements.SchematicResourceButtonSaveAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceButtonSaveAttributes extends HTMLAttributes {
      'completed'?: string;
      'inProgress'?: string;
      'onUpdateCurrentResource'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceEditorStatus {
      'message': string;
      'status': string;
    }
  }

  interface HTMLSchematicResourceEditorStatusElement extends StencilComponents.SchematicResourceEditorStatus, HTMLStencilElement {}

  var HTMLSchematicResourceEditorStatusElement: {
    prototype: HTMLSchematicResourceEditorStatusElement;
    new (): HTMLSchematicResourceEditorStatusElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-editor-status': HTMLSchematicResourceEditorStatusElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-editor-status': HTMLSchematicResourceEditorStatusElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-editor-status': JSXElements.SchematicResourceEditorStatusAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceEditorStatusAttributes extends HTMLAttributes {
      'message'?: string;
      'status'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceEditorToolbar {

    }
  }

  interface HTMLSchematicResourceEditorToolbarElement extends StencilComponents.SchematicResourceEditorToolbar, HTMLStencilElement {}

  var HTMLSchematicResourceEditorToolbarElement: {
    prototype: HTMLSchematicResourceEditorToolbarElement;
    new (): HTMLSchematicResourceEditorToolbarElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-editor-toolbar': HTMLSchematicResourceEditorToolbarElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-editor-toolbar': HTMLSchematicResourceEditorToolbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-editor-toolbar': JSXElements.SchematicResourceEditorToolbarAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceEditorToolbarAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceEditor {
      'clearEditor': () => void;
      'createResource': (messageOnComplete: string) => void;
      'deleteResource': (id: string, messageOnComplete: string) => void;
      'newResource': (messageOnComplete: string) => void;
      'noContent': string;
      'placeholder': string;
      'readCompleted': string;
      'readInProgress': string;
      'readResource': (id: string, messageOnComplete: string) => void;
      'resourceId': string;
      'updateResource': (id: string, messageOnComplete: string) => void;
      'url': string;
    }
  }

  interface HTMLSchematicResourceEditorElement extends StencilComponents.SchematicResourceEditor, HTMLStencilElement {}

  var HTMLSchematicResourceEditorElement: {
    prototype: HTMLSchematicResourceEditorElement;
    new (): HTMLSchematicResourceEditorElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-editor': HTMLSchematicResourceEditorElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-editor': HTMLSchematicResourceEditorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-editor': JSXElements.SchematicResourceEditorAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceEditorAttributes extends HTMLAttributes {
      'noContent'?: string;
      'onResourceRefresh'?: (event: CustomEvent) => void;
      'onResourceUpdated'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'readCompleted'?: string;
      'readInProgress'?: string;
      'resourceId'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceExplorer {

    }
  }

  interface HTMLSchematicResourceExplorerElement extends StencilComponents.SchematicResourceExplorer, HTMLStencilElement {}

  var HTMLSchematicResourceExplorerElement: {
    prototype: HTMLSchematicResourceExplorerElement;
    new (): HTMLSchematicResourceExplorerElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-explorer': HTMLSchematicResourceExplorerElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-explorer': HTMLSchematicResourceExplorerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-explorer': JSXElements.SchematicResourceExplorerAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceExplorerAttributes extends HTMLAttributes {
      'onUrlUpdated'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceFilterControls {
      'active': boolean;
      'filtersOff': string;
      'filtersOn': string;
      'removeFilters': string;
    }
  }

  interface HTMLSchematicResourceFilterControlsElement extends StencilComponents.SchematicResourceFilterControls, HTMLStencilElement {}

  var HTMLSchematicResourceFilterControlsElement: {
    prototype: HTMLSchematicResourceFilterControlsElement;
    new (): HTMLSchematicResourceFilterControlsElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-filter-controls': HTMLSchematicResourceFilterControlsElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-filter-controls': HTMLSchematicResourceFilterControlsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-filter-controls': JSXElements.SchematicResourceFilterControlsAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceFilterControlsAttributes extends HTMLAttributes {
      'active'?: boolean;
      'filtersOff'?: string;
      'filtersOn'?: string;
      'onFilterMenuToggle'?: (event: CustomEvent) => void;
      'onFilterStatusUpdate'?: (event: CustomEvent) => void;
      'removeFilters'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceFilters {
      'active': boolean;
      'filter': string;
      'getFilters': (url: string) => void;
      'listResources': () => void;
      'menuOpen': boolean;
      'resetFilters': string;
      'url': string;
    }
  }

  interface HTMLSchematicResourceFiltersElement extends StencilComponents.SchematicResourceFilters, HTMLStencilElement {}

  var HTMLSchematicResourceFiltersElement: {
    prototype: HTMLSchematicResourceFiltersElement;
    new (): HTMLSchematicResourceFiltersElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-filters': HTMLSchematicResourceFiltersElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-filters': HTMLSchematicResourceFiltersElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-filters': JSXElements.SchematicResourceFiltersAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceFiltersAttributes extends HTMLAttributes {
      'active'?: boolean;
      'filter'?: string;
      'menuOpen'?: boolean;
      'onFilterMenuToggle'?: (event: CustomEvent) => void;
      'onFilterStatusUpdate'?: (event: CustomEvent) => void;
      'resetFilters'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceListLink {
      'resourceId': string;
      'status': string;
    }
  }

  interface HTMLSchematicResourceListLinkElement extends StencilComponents.SchematicResourceListLink, HTMLStencilElement {}

  var HTMLSchematicResourceListLinkElement: {
    prototype: HTMLSchematicResourceListLinkElement;
    new (): HTMLSchematicResourceListLinkElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-list-link': HTMLSchematicResourceListLinkElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-list-link': HTMLSchematicResourceListLinkElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-list-link': JSXElements.SchematicResourceListLinkAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceListLinkAttributes extends HTMLAttributes {
      'onActiveResourceSet'?: (event: CustomEvent) => void;
      'resourceId'?: string;
      'status'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceList {
      'activeResourceId': string;
      'clearResourceList': () => void;
      'listResources': (url: string) => void;
      'newResource': () => void;
      'noContent': string;
      'url': string;
    }
  }

  interface HTMLSchematicResourceListElement extends StencilComponents.SchematicResourceList, HTMLStencilElement {}

  var HTMLSchematicResourceListElement: {
    prototype: HTMLSchematicResourceListElement;
    new (): HTMLSchematicResourceListElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-list': HTMLSchematicResourceListElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-list': HTMLSchematicResourceListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-list': JSXElements.SchematicResourceListAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceListAttributes extends HTMLAttributes {
      'activeResourceId'?: string;
      'noContent'?: string;
      'onActiveResourceSet'?: (event: CustomEvent) => void;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceNavigator {

    }
  }

  interface HTMLSchematicResourceNavigatorElement extends StencilComponents.SchematicResourceNavigator, HTMLStencilElement {}

  var HTMLSchematicResourceNavigatorElement: {
    prototype: HTMLSchematicResourceNavigatorElement;
    new (): HTMLSchematicResourceNavigatorElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-navigator': HTMLSchematicResourceNavigatorElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-navigator': HTMLSchematicResourceNavigatorElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-navigator': JSXElements.SchematicResourceNavigatorAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceNavigatorAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceRepeaterDelete {

    }
  }

  interface HTMLSchematicResourceRepeaterDeleteElement extends StencilComponents.SchematicResourceRepeaterDelete, HTMLStencilElement {}

  var HTMLSchematicResourceRepeaterDeleteElement: {
    prototype: HTMLSchematicResourceRepeaterDeleteElement;
    new (): HTMLSchematicResourceRepeaterDeleteElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-repeater-delete': HTMLSchematicResourceRepeaterDeleteElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-repeater-delete': HTMLSchematicResourceRepeaterDeleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-repeater-delete': JSXElements.SchematicResourceRepeaterDeleteAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceRepeaterDeleteAttributes extends HTMLAttributes {
      'onDeleteRepeatable'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceRepeatable {
      'deleteButton': string;
      'index': string;
      'isRequired': boolean;
      'model': string;
    }
  }

  interface HTMLSchematicResourceRepeatableElement extends StencilComponents.SchematicResourceRepeatable, HTMLStencilElement {}

  var HTMLSchematicResourceRepeatableElement: {
    prototype: HTMLSchematicResourceRepeatableElement;
    new (): HTMLSchematicResourceRepeatableElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-repeatable': HTMLSchematicResourceRepeatableElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-repeatable': HTMLSchematicResourceRepeatableElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-repeatable': JSXElements.SchematicResourceRepeatableAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceRepeatableAttributes extends HTMLAttributes {
      'deleteButton'?: string;
      'index'?: string;
      'isRequired'?: boolean;
      'model'?: string;
      'onResourceRepeated'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceRepeaterButton {
      'text': string;
      'url': string;
    }
  }

  interface HTMLSchematicResourceRepeaterButtonElement extends StencilComponents.SchematicResourceRepeaterButton, HTMLStencilElement {}

  var HTMLSchematicResourceRepeaterButtonElement: {
    prototype: HTMLSchematicResourceRepeaterButtonElement;
    new (): HTMLSchematicResourceRepeaterButtonElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-repeater-button': HTMLSchematicResourceRepeaterButtonElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-repeater-button': HTMLSchematicResourceRepeaterButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-repeater-button': JSXElements.SchematicResourceRepeaterButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceRepeaterButtonAttributes extends HTMLAttributes {
      'text'?: string;
      'url'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceRepeater {
      'minInstances': number;
      'sequenceRepeatables': () => void;
    }
  }

  interface HTMLSchematicResourceRepeaterElement extends StencilComponents.SchematicResourceRepeater, HTMLStencilElement {}

  var HTMLSchematicResourceRepeaterElement: {
    prototype: HTMLSchematicResourceRepeaterElement;
    new (): HTMLSchematicResourceRepeaterElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-repeater': HTMLSchematicResourceRepeaterElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-repeater': HTMLSchematicResourceRepeaterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-repeater': JSXElements.SchematicResourceRepeaterAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceRepeaterAttributes extends HTMLAttributes {
      'minInstances'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicResourceSearch {
      'placeholder': string;
      'url': string;
      'value': string;
    }
  }

  interface HTMLSchematicResourceSearchElement extends StencilComponents.SchematicResourceSearch, HTMLStencilElement {}

  var HTMLSchematicResourceSearchElement: {
    prototype: HTMLSchematicResourceSearchElement;
    new (): HTMLSchematicResourceSearchElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-resource-search': HTMLSchematicResourceSearchElement;
  }
  interface ElementTagNameMap {
    'schematic-resource-search': HTMLSchematicResourceSearchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-resource-search': JSXElements.SchematicResourceSearchAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicResourceSearchAttributes extends HTMLAttributes {
      'placeholder'?: string;
      'url'?: string;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface SchematicRouter {

    }
  }

  interface HTMLSchematicRouterElement extends StencilComponents.SchematicRouter, HTMLStencilElement {}

  var HTMLSchematicRouterElement: {
    prototype: HTMLSchematicRouterElement;
    new (): HTMLSchematicRouterElement;
  };
  interface HTMLElementTagNameMap {
    'schematic-router': HTMLSchematicRouterElement;
  }
  interface ElementTagNameMap {
    'schematic-router': HTMLSchematicRouterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'schematic-router': JSXElements.SchematicRouterAttributes;
    }
  }
  namespace JSXElements {
    export interface SchematicRouterAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;