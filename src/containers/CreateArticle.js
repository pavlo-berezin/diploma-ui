import React, { Component } from 'react'
import { connect } from 'react-redux';
import ArticleForm from '../components/ArticleForm'
import { saveArticle } from '../actions/articles';

const CreateArticle = (props) => {
  const handleSubmit = (article) => {
    props.saveArticle(article);
    props.history.push('/');
  }

  return (
    <div>
      <ArticleForm onSubmit={ (article) => handleSubmit(article)}></ArticleForm>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  saveArticle: (article) => dispatch(saveArticle(article))
});

export default connect(null, mapDispatchToProps)(CreateArticle);
