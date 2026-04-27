export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number | { [key: string]: number };
  category: string;
  image?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Deal {
  id: string;
  name: string;
  items: string[];
  price: number;
  image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variant?: string;
  image?: string;
}
