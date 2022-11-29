import { Asset } from 'contentful';

export function getImageHeightForWidth(image: Asset, width: number): number {
    return Math.floor(
        (image.fields.file!.details.image!.height /
            image.fields.file!.details.image!.width) *
            width
    );
}

export function getImageWidthForHeight(image: Asset, height: number): number {
    return Math.floor(
        (image.fields.file!.details.image!.width /
            image.fields.file!.details.image!.height) *
            height
    );
}
