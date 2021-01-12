import React from 'react';
import { Layout } from 'antd';
import useMediaWidth from '../../../hooks/useMediaWidth';
import style from './s.module.scss';
import WidgetPageMenu from '../page-menu';

const { Sider } = Layout;

const WidgetPageSidebar = ({ nav }) => {
  const mediaWidth = useMediaWidth();

  if (mediaWidth === 'sm' || mediaWidth === 'xs' || mediaWidth === 'md') {
    return <></>;
  }

  return (
    <Sider className={style.sider} width={200} trigger={null}>
      <WidgetPageMenu nav={nav} />
    </Sider>
  );
};

export default WidgetPageSidebar;
