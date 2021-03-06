import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLE_DETAILS,
  FETCH_ARTICLE_DETAILS_SUCCESS,
  FETCH_ARTICLE_DETAILS_FAIL,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAIL,
  SAVE_ARTICLE,
  SAVE_ARTICLE_SUCCESS,
  SAVE_ARTICLE_FAIL
} from "../helpers/actionTypes";
import { stringify } from 'query-string';

export const fetchArticlesStart = () => ({ type: FETCH_ARTICLES });
export const fetchArticlesSuccess = (articles) => ({ type: FETCH_ARTICLES_SUCCESS, articles });
export const fetchArticlesFail = (error) => ({ type: FETCH_ARTICLES_FAIL, error });

export const fetchArticleDetailsStart = (id) => ({ type: FETCH_ARTICLE_DETAILS, id });
export const fetchArticleDetailsSuccess = (id, article) => ({ type: FETCH_ARTICLE_DETAILS_SUCCESS, id, article });
export const fetchArticleDetailsFail = (id, error) => ({ type: FETCH_ARTICLE_DETAILS_FAIL, id, error });

export const saveArticleStart = (id) => ({ type: SAVE_ARTICLE, id});
export const saveArticleSuccess = (id, article) => ({ type: SAVE_ARTICLE_SUCCESS, id, article});
export const saveArticleFail = (id, error) => ({ type: SAVE_ARTICLE_FAIL, id, error});

export const deleteArticleStart = (id) => ({ type: DELETE_ARTICLE, id });
export const deleteArticleSuccess = (id) => ({ type: DELETE_ARTICLE_SUCCESS, id });
export const deleteArticleFail = (id, error) => ({ type: DELETE_ARTICLE_FAIL, id, error });

// TODO: MOVE API CALLS SEPARATE
export const fetchArticles = (categories = []) => async dispatch => {
  dispatch(fetchArticlesStart())

  const url = categories.length ? `/article?${stringify({ categories })}` : '/article';
  const response = await (await fetch(url)).json();

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

export const saveArticle = (article) => async dispatch => {
  const id = article._id || article.id || new Date().getTime();

  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article)
  };

  dispatch(saveArticleStart(id));

  const response = await (await fetch(`/article`, options)).json()

  if (response.status === 'OK') {
    dispatch(saveArticleSuccess(id, response.article));
  } else {
    dispatch(saveArticleFail(id, response.error));
  }
}

export const saveArticleFile = (body) => async dispatch => {
  const id = body._id || body.id || new Date().getTime();

  const formData = new FormData();

  Object.entries(body).forEach(([key, value]) => formData.append(key, value));
  console.log(formData);
  const options = {
    method: 'POST',
    body: formData
  };


  dispatch(saveArticleStart(id));

  const response = await (await fetch(`/article/withFile`, options)).json()

  if (response.status === 'OK') {
    dispatch(saveArticleSuccess(id, response.article));
  } else {
    dispatch(saveArticleFail(id, response.error));
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
