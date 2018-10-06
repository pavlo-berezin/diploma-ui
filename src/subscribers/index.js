import { categoriesSubscriber } from './categories';
export * from './categories';

export const initSubscriptions = (store) => {
  const categoriesSubscription = categoriesSubscriber(store);
}
