import { Address } from './address.model';
import { Payment } from './payment.model';
import { Profile } from './profile.model';

/**
 * Represents the _Account_ model
 *
 * ```yaml
 * id: string;
 * email: string;
 * address: Address;
 * payments: Payment[];
 * profiles: Profile[];
 * ```
 */
export interface Account {
  id: string;
  /** address for the owner of the account */
  address: Address;
  /** the email associated with the account */
  email : string;
  /** stored payment methods */
  payments: Payment[];
  /** people the account owner can book a site with */
  profiles: Profile[];
}
