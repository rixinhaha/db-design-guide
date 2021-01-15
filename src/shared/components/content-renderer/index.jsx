import React from 'react';
import PageTitle from './page-title';
import Paragraph from './paragraph';
import ParagraphTitle from './paragraph-title';
import style from './s.module.scss';

const ContentRenderer = ({ data, children }) => {
  const { title, text } = data;
  const elementsToRender = [];
  const pageTitle = data && title ? <PageTitle text={data.title} /> : <></>;
  if (data && text) {
    text.forEach((item) => {
      const { type, value } = item;
      if (type === 'text') {
        elementsToRender.push(<Paragraph text={value} />);
      }
      if (type === 'header') {
        elementsToRender.push(<ParagraphTitle text={value} />);
      }
      if (type === 'image') {
        console.log(value);
        // const { src, text } = value;
        // elementsToRender.push(<img src={src} alt={text}/>)
      }
    });
  }

  return (
    <div>
      {pageTitle}
      <div className={style.contentElements}>
        {elementsToRender}
      </div>
      {children}
    </div>
  );
};

export default ContentRenderer;
