import {IOwner} from './';

export interface ICar {
  brand: string;
  model: string;
  price: number;
  owner: IOwner;
}

