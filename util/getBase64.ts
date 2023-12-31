import { getPlaiceholder } from 'plaiceholder';
import { Photo } from '../models/image.model';

async function getBase64(imageUrl: string) {
    console.log(`Fetching image: ${imageUrl}`);
    try {
        // Fetch with increased timeout
        const res = await fetch(imageUrl);

        if (!res.ok) {
            throw new Error(
                `Failed to fetch image: ${res.status} ${res.statusText}`
            );
        }

        console.log(`Successfully Fetched image: ${imageUrl}`);

        const buffer = await res.arrayBuffer();

        const { base64 } = await getPlaiceholder(Buffer.from(buffer));

        console.log(`Successfully blurred image: ${imageUrl}`);

        return base64;
    } catch (e) {
        if (e instanceof Error) console.log(e.stack);
    }
}

export default async function addBlurredDataUrls(
    photos: Photo[]
): Promise<Photo[]> {
    if (true) {
        return photos;
    }

    // Make all requests at once instead of awaiting each one - avoiding a waterfall
    const base64Promises = photos.map((photo) => getBase64(photo.src));

    // Resolve all requests in order
    const base64Results = await Promise.all(base64Promises);

    const photosWithBlur: Photo[] = photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i];
        return photo;
    });

    return photosWithBlur;
}
