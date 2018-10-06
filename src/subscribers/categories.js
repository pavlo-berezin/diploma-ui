import { getCategories } from '../reducers';
import { samePrimitiveArrays } from '../helpers/utils';
import { fetchArticles } from '../actions/articles';

export const categoriesSubscriber = (store) => {
  let curr;

  const handleChange = () => {
    let prev = curr;
    curr = getCategories(store.getState());

    if (!samePrimitiveArrays(prev, curr)) {
      // TODO: Add debounce, add url change.
      store.dispatch(fetchArticles(curr));
    }
  }

  return store.subscribe(handleChange);
}
