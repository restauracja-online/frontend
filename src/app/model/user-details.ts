import {Address} from './address';

export interface UserDetails {
  email: string;
  status: string;
  addresses: Array<Address>;
}
