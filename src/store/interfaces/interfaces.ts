export type Tags = 'best-seller' | 'user-selection';

export type categories = 'cupcake' | 'daily';

export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  tags: Tags[];
  categories: categories[];
  ingredients: string;
  description: string;
  review: Review[];
}

export interface CartProduct extends Product {
  id: string;
  quantity: number;
  totalPrice: string;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number; // 2 digits decimal
  comment: string;
}

export interface User {
  id: string;
  image: string;
  name: string;
  deliveryInfo: {
    document: string;
    address: string;
  };
  paymentInfo: {
    selectedPaymentMethod: string;
  };
}
