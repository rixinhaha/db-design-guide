/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import useMediaWidth from '../../../hooks/useMediaWidth';
import DBLogo from '../../../../../static/db-logo.png';
import style from './s.module.scss';
import WidgetPageMenu from '../page-menu';

const WidgetPageNavDrawer = ({ nav }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const mediaWidth = useMediaWidth();

  const onClose = () => {
    setShowDrawer(false);
  };

  const handleClick = () => {
    setShowDrawer((prevVal) => !prevVal);
  };

  useEffect(() => {
    onClose();
  }, [window.location.href]);

  if (mediaWidth === 'lg') {
    return <></>;
  }

  return (
    <div>
      <MenuUnfoldOutlined className={style.icon} onClick={handleClick} />
      <Drawer
        className={style.drawer}
        title={(
          <div className={style.logoWrapper}>
            <img
              className={style.logoImage}
              alt="Daily Bruin Logo"
              src={DBLogo}
            />
            <h2 className={style.logoText}>DESIGN</h2>
          </div>
        )}
        headerStyle={{
          background: '#e8ebee',
          padding: 0,
        }}
        bodyStyle={{
          background: '#f5f5f5',
          padding: 0,
        }}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={
          showDrawer
          && (mediaWidth === 'sm' || mediaWidth === 'xs' || mediaWidth === 'md')
        }
        key="left"
      >
        <WidgetPageMenu nav={nav} />
      </Drawer>
    </div>
  );
};

export default WidgetPageNavDrawer;
