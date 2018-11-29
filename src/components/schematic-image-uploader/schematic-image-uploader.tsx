import { Element, Component, Prop, Listen } from '@stencil/core';

@Component({
    tag: 'schematic-image-uploader'
})
export class ImageUploader {
    @Element() imageUploader: HTMLStencilElement;
    @Prop() src: string;

    @Listen('uploadResult')
    onEvent(event: CustomEvent) {
        console.log('hey');
        console.log(event);
    }

    render() {
        return(
            <div>
                <img src="@ViewData["ContentWebPath"]/@Model.KeyImage.FileName" alt="@Model.KeyImage.AltText" />
                <input type="hidden" asp-for="@Model.ID" value="@Model.ID" />
                <slot name="uploader" />
            </div>
        );
    }
}