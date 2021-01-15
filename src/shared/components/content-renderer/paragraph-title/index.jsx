import React from 'react';
import style from './s.module.scss';

const ParagraphTitle = ({ text }) => (
  <div className={style.titleWrapper}>
    <h2 className={style.title}>{text}</h2>
  </div>
);

export default ParagraphTitle;
