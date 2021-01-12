const APISiteData = 'https://kerckhoff.dailybruin.com/api/packages/flatpages/internal.design.dailybruin.com/';
const axios = require('axios');
const { lowercaseAndDash } = require('./helper');

exports.createPages = async ({ actions: { createPage } }) => {
  const response = await axios.get(APISiteData);
  const siteData = response.data;
  const { data } = siteData;

  const { navigation } = data['Navigation.aml'];

  const pathArray = [];

  const recursiveGenPagesFromNavigation = (nav) => {
    nav.forEach((navItem) => {
      if (navItem.type === 'menu_item') {
        pathArray.push(lowercaseAndDash(navItem.value));
        const pathCreated = `/${pathArray.join('/')}`;
        createPage({
          path: pathCreated,
          component: require.resolve('./src/templates/doc-page/index.jsx'),
          context: {
            pageData: data[`${navItem.value}.aml`],
            pageNav: navigation,
            path: `/${pathArray.join('/')}`,
          },
        });
        pathArray.pop();
      } else {
        pathArray.push(lowercaseAndDash(navItem.value.menu_item));
        recursiveGenPagesFromNavigation(navItem.value.submenus);
        pathArray.pop();
      }
    });
  };

  recursiveGenPagesFromNavigation(navigation);
};
