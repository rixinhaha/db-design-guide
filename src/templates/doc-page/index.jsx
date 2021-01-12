import React from 'react';
import ContentRenderer from '../../shared/components/content-renderer';
import PageLayout from '../../shared/components/page-layout';
import style from './s.module.scss';

export default function DocPage({ pageContext: { pageData, pageNav } }) {
  return (
    <PageLayout data={pageData} nav={pageNav}>
      <div className={style.contentWrapper}>
        <ContentRenderer data={pageData} />
      </div>
    </PageLayout>
  );
}
