/**
 * Represents an image object, which has the following properties:
 * imageId - The image id number in the database.
 * blobURL - The URL of blob location for the image
 * ```yaml
 * imageId: number;
 * blobURL: string;
 * ```
 */
export class Image {
  imageId: number;
  blobURL: string;
}
