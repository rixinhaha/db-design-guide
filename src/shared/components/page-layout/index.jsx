import React from 'react';
import { Layout } from 'antd';
import WidgetPageHeader from '../widgets/page-header';
import style from './s.module.scss';
import WidgetPageSidebar from '../widgets/page-sider';

const { Content } = Layout;

const PageLayout = ({ children, nav }) => (
  <Layout>
    <WidgetPageHeader nav={nav} />
    <Layout>
      <WidgetPageSidebar nav={nav} />
      <Layout className={style.contentLayout}>
        <Content className={style.content}>{children}</Content>
      </Layout>
    </Layout>
  </Layout>
);

export default PageLayout;
