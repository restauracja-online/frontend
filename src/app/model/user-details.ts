import {Address} from './address';

export interface UserDetails {
  email: string;
  status: string;
  role: string;
  addresses: Array<Address>;
}
