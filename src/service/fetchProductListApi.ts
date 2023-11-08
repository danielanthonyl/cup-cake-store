import {collection, getDocs} from 'firebase/firestore';
import {database} from '../database/database';
import {Product, Review} from '../store/interfaces/interfaces';

export const fetchProductListApi = async () => {
  try {
    const productsCollection = collection(database, 'products');
    const reviewCollection = collection(database, 'reviews');

    const productsSnap = await getDocs(productsCollection);
    const reviewSnap = await getDocs(reviewCollection);

    const products: Product[] = [];
    const reviews: Review[] = [];

    reviewSnap.forEach(doc => {
      reviews.push({id: doc.id, ...doc.data()} as Review);
    });

    productsSnap.forEach(doc => {
      const reviewPerProduct = reviews.filter(
        review => review.productId === doc.id,
      );

      products.push({
        id: doc.id,
        review: reviewPerProduct,
        ...doc.data(),
      } as Product);
    });

    return products;
  } catch (error) {
    const {message} = error as {message: string};
    throw new Error(message);
  }
};
