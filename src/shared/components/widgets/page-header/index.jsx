import React from 'react';
import { Layout } from 'antd';
import style from './s.module.scss';
import WidgetPageNavDrawer from '../page-nav-drawer';
import DBLogo from '../../../../../static/db-logo.png';

const { Header } = Layout;

const WidgetPageHeader = ({ nav }) => (
  <div>
    <Header className={style.header}>
      <div className={style.headerWrapper}>
        <WidgetPageNavDrawer nav={nav} />
        <div className={style.headerLogoWrapper}>
          <img
            className={style.headerLogoImage}
            alt="Daily Bruin Logo"
            src={DBLogo}
          />
          <h2 className={style.headerLogoText}>DESIGN</h2>
        </div>
        <h1 className={style.headerTitle}>
          <span className={style.headerTitleMainText}>DAILY BRUIN</span>
          {' '}
          DESIGN
        </h1>
      </div>
    </Header>
  </div>
);

export default WidgetPageHeader;
