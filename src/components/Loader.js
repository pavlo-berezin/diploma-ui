import React from 'react';
import '../styles/loader.scss';
import { ReactComponent as Spinner } from '../icons/spinner.svg';

const Loader = () => (
  <div className="loader">
    <Spinner></Spinner>
  </div>
)

export default Loader;
