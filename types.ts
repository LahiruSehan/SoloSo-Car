
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: string;
  condition: 'Brand New' | 'Registered' | 'Used';
  image: string;
  images: string[];
  status: 'Available' | 'Sold';
  specs: {
    mileage?: string;
    engine: string;
    fuel: string;
  };
  description?: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Stat {
  label: string;
  value: number;
  icon: string;
  suffix?: string;
  color?: string;
}
