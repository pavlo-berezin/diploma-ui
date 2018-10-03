import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLE_DETAILS,
  FETCH_ARTICLE_DETAILS_SUCCESS,
  FETCH_ARTICLE_DETAILS_FAIL,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL
} from "../helpers/actionTypes";

export const fetchArticlesStart = () => ({ type: FETCH_ARTICLES });
export const fetchArticlesSuccess = (articles) => ({ type: FETCH_ARTICLES_SUCCESS, articles });
export const fetchArticlesFail = (error) => ({ type: FETCH_ARTICLES_FAIL, error });

export const fetchArticleDetailsStart = (id) => ({ type: FETCH_ARTICLE_DETAILS, id });
export const fetchArticleDetailsSuccess = (id, article) => ({ type: FETCH_ARTICLE_DETAILS_SUCCESS, id, article });
export const fetchArticleDetailsFail = (id, error) => ({ type: FETCH_ARTICLE_DETAILS_FAIL, id, error });

export const deleteArticleStart = (id) => ({ type: DELETE_ARTICLE, id });
export const deleteArticleSuccess = (id) => ({ type: DELETE_ARTICLE_SUCCESS, id });
export const deleteArticleFail = (id, error) => ({ type: DELETE_ARTICLE_FAIL, id, error });

// TODO: MOVE API CALLS SEPARATE
export const fetchArticles = () => async dispatch => {
  dispatch(fetchArticlesStart())
  const response = await (await fetch('/article')).json();
  if (response.status === 'OK') {
    const articles = response.articles || [];
    dispatch(fetchArticlesSuccess(articles));
  } else {
    dispatch(fetchArticlesFail(response.error));
  }
}

export const fetchArticleDetails = (id) => async dispatch => {
  dispatch(fetchArticleDetailsStart(id))

  const response = await (await fetch(`/article/${id}`)).json();
  if (response.status === 'OK') {
    const article = response.article || {};
    dispatch(fetchArticleDetailsSuccess(article._id, article));
  } else {
    dispatch(fetchArticleDetailsFail(id, response.error));
  }
}

export const deleteArticle = (id) => async dispatch => {
  dispatch(deleteArticleStart(id))

  const response = await (await fetch(`/article/${id}`, { method: 'DELETE' })).json();
  if (response.status === 'OK') {
    dispatch(deleteArticleSuccess(id));
  } else {
    dispatch(deleteArticleFail(id, response.error));
  }
}
