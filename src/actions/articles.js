import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLE_DETAILS,
  FETCH_ARTICLE_DETAILS_SUCCESS,
  FETCH_ARTICLE_DETAILS_FAIL
} from "../helpers/actionTypes";

export const fetchArticlesStart = () => ({ type: FETCH_ARTICLES });
export const fetchArticlesSuccess = (articles) => ({ type: FETCH_ARTICLES_SUCCESS, articles});
export const fetchArticlesFail = (error) => ({ type: FETCH_ARTICLES_FAIL, error });

export const fetchArticleDetailsStart = () => ({ type: FETCH_ARTICLE_DETAILS });
export const fetchArticleDetailsSuccess = (articles) => ({ type: FETCH_ARTICLE_DETAILS_SUCCESS, articles});
export const fetchArticleDetailsFail = (error) => ({ type: FETCH_ARTICLE_DETAILS_FAIL, error });


// TODO: MOVE API CALLS SEPARATE
export const fetchArticles = () => async dispatch => {
  dispatch(fetchArticlesStart())
  const response = await fetch('articles').json();
  if (response.status === 'OK') {
    const articles = response.articles || [];
    dispatch(fetchArticlesSuccess(articles));
  } else {
    dispatch(fetchArticlesFail(response.error));
  }
}

export const fetchArticleDetails = (id) => async dispatch => {
  dispatch(fetchArticleDetailsStart(id))
  const response = await fetch(`articles/${id}`).json();
  if (response.status === 'OK') {
    const article = response.article || {};
    dispatch(fetchArticleDetailsSuccess(article));
  } else {
    dispatch(fetchArticleDetailsFail(response.error));
  }
}
