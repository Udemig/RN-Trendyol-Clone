interface Name {
  firstname: string;
  lastname: string;
}
interface Geolocation {
  lat: string;
  long: string;
}
interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}
interface User {
  id: number;
  email: string;
  name: Name;
  phone: string;
  address: Address;
}
interface UserState {
  user: User | null;
  pending: boolean;
  error: any;
}
export type {UserState};
