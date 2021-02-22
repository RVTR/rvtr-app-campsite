import { Address } from './address.model';
import { Review } from './review.model';
import { Rental } from './rental.model';
import { Image } from './image.model';

/**
 * Represents the _Lodging_ model
 *
 * ```yaml
 * id: string;
 * location: Location;
 * name: string;
 * bathrooms: number;
 * rentals: Rental[];
 * reviews: Review[];
 * imageUrls: string[]
 * ```
 */
export interface Lodging {
  id: number;
  address: Address;
  /** name of the campground */
  name: string;
  /** number of bathrooms available to the campground */
  bathrooms: number;
  /** sites within the campground */
  rentals: Rental[];
  /** reviews associated with any sites within the campground */
  reviews: Review[];
  /** various images of the campground */
  images: Image[];
}
