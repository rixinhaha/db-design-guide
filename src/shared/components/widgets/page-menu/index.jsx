import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'gatsby';
import { lowercaseAndDash } from '../../../../../helper';
import style from './s.module.scss';
import './s.scss';

const WidgetPageMenu = ({ nav }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const pathsArray = [];

  const findSelectedKeys = (path, navItems) => {
    let foundKeys = [];
    navItems.forEach((item) => {
      const { type } = item;
      if (type === 'nested_menu') {
        pathsArray.push(lowercaseAndDash(item.value.menu_item));
        foundKeys = [
          ...foundKeys,
          ...findSelectedKeys(path, item.value.submenus),
        ];
        pathsArray.pop();
      }
      if (type === 'menu_item') {
        pathsArray.push(lowercaseAndDash(item.value));
        if (`/${pathsArray.join('/')}` === path) {
          foundKeys.push(path);
        }
        pathsArray.pop();
      }
    });
    return foundKeys;
  };

  useEffect(() => {
    const { pathname } = window.location;
    const foundSelectedKeys = findSelectedKeys(pathname, nav);
    setSelectedKeys(foundSelectedKeys);
  }, [window.location.href]);

  const generateMenuItems = (navItems) => {
    const menuItems = navItems.map((item) => {
      const { type } = item;
      if (type === 'nested_menu') {
        pathsArray.push(lowercaseAndDash(item.value.menu_item));
        const nestedMenuItems = generateMenuItems(item.value.submenus);
        const key = `/${pathsArray.join('/')}`;
        pathsArray.pop();
        return (
          <Menu.SubMenu
            expandIcon={<></>}
            className={style.menuItem}
            key={key}
            title={<span>{item.value.menu_item}</span>}
          >
            {nestedMenuItems}
          </Menu.SubMenu>
        );
      }
      if (type === 'menu_item') {
        pathsArray.push(lowercaseAndDash(item.value));
        const key = `/${pathsArray.join('/')}`;
        pathsArray.pop();
        return (
          <Menu.Item className={style.menuItem} key={key} title={item.value}>
            <Link key={key} to={key}>
              <span>{item.value}</span>
            </Link>
          </Menu.Item>
        );
      }
      return <></>;
    });
    return menuItems;
  };

  return (
    <Menu
      style={{
        background: 'none',
      }}
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={['/sections']}
    >
      {generateMenuItems(nav)}
    </Menu>
  );
};

export default WidgetPageMenu;
