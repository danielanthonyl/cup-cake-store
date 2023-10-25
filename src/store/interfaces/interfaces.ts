export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  ingredients: string;
  description: string;
}

export interface CartProduct extends Product {
  quantity: number;
  totalPrice: string;
}

export interface Review {
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
