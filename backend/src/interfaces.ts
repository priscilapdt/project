export interface PalindromeParams {
  initialValue: number;
  finalValue: number;
}
export interface MoneyChangeParams {
  totalPrice: number;
  money: number;
}

export interface Cep {
  cepNumber: string;
  adress: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface VehicleInterface {
  model: string;
  yearOfManufacture: string;
  readonly doorQuantity: number | null;
  brand: string;
}

export interface CarInterface extends VehicleInterface {
  readonly doorQuantity: 2 | 4 | null;
}

export interface MotorcycleInterface extends VehicleInterface {
  passengers: 2 | 4 | null;
  readonly wheelNumber: 2;
}
