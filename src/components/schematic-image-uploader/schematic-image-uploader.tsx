import { Element, Component, State, Prop, Listen } from '@stencil/core';
import '../schematic-uploader/schematic-uploader';

@Component({
    tag: 'schematic-image-uploader',
    styleUrl: 'schematic-image-uploader.scss',
})
export class ImageUploader {
    @Element() imageUploader: HTMLStencilElement;
    @State() hasImage: boolean = false;
    @State() imgAlt: string;
    @State() imgSrc: string;
    @Prop() accept: string;
    @Prop() alt: string;
    @Prop() culture: string;
    @Prop() delete: string;
    @Prop() fileName: string;
    @Prop() formDataName: string;
    @Prop() headers: string;
    @Prop() input: string;
    @Prop() maxFiles: number;
    @Prop() method: string = 'POST';
    @Prop() nodrop: boolean = false;
    @Prop() path: string;
    @Prop() target: string;

    @Listen('uploadResult')
    onEvent(event: CustomEvent) {
        const xhrResponse: any = JSON.parse(event.detail.detail.xhr.response);
        const newFileId: string = xhrResponse[0].id;
        const newFileName: string = event.detail.detail.file.name;
        this.targetInputElement.setAttribute('value', newFileId);
        this.displayImage(newFileName);
    }

    private targetInputElement: HTMLInputElement;

    enforceTrailingSlash(path: string) {
        return path.endsWith("/") ? path : path + "/";
    }

    getImagePath(path: string, fileName: string) {
        return this.enforceTrailingSlash(path) + fileName;
    }

    deleteImage(event: UIEvent) {
        event.preventDefault();
        this.targetInputElement.value = null;
        this.hasImage = false;
    }

    displayImage(fileName: string) {
        this.imgSrc = this.getImagePath(this.path, fileName);
        this.hasImage = true;
    }

    componentWillLoad() {
        this.hasImage = (this.fileName && this.fileName.length > 1) ? true : false;
        this.imgAlt = this.alt;
        this.imgSrc = this.getImagePath(this.path, this.fileName);
        this.targetInputElement = document.getElementById(this.input) as HTMLInputElement;
    }

    render() {
        return([
            <div>
                {this.hasImage &&
                    <div class="resource-uploader__image-panel">
                        <img class="resource-uploader__image" src={this.imgSrc} alt={this.imgAlt} />
                        {this.delete &&
                            <div class="resource-uploader__image-controls">
                                <button class="resource-uploader__image-delete-button" 
                                    onClick={(event: UIEvent) => this.deleteImage(event)}>{this.delete}</button>
                            </div>
                        }
                    </div>
                }
            </div>,
            <div class={this.hasImage ? 'resource-uploader__slot-contents' : 'resource-uploader__slot-contents--hidden'}>
                <slot/>
            </div>,
            <schematic-uploader
                accept={this.accept}
                culture={this.culture}
                form-data-name={this.formDataName}
                headers={this.headers}
                target={this.target} 
                max-files={this.maxFiles} 
                method={this.method}
                nodrop={this.nodrop}>
            </schematic-uploader>
        ]);
    }
}