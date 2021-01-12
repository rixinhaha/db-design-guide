import React from 'react';
import style from './s.module.scss';

const PageTitle = ({ text }) => (
  <div className={style.titleWrapper}>
    <h1>{text}</h1>
  </div>
);

export default PageTitle;
