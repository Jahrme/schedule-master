(function() {
  'use strict';
  angular.module('articles').run(menuConfig);
  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Find My Class',
      state: 'map',
      // type: 'dropdown',
      roles: ['*']
    });
    // Add the dropdown list item
    // menuService.addSubMenuItem('topbar', 'articles', {
    //   title: 'List Articles',
    //   state: 'articles.list'
    // });
    // Add the dropdown create item
    // menuService.addSubMenuItem('topbar', 'articles', {
    //   title: 'Create Article',
    //   state: 'articles.create',
    //   roles: ['user']
    // });
    // Map Tab
    // menuService.addSubMenuItem('topbar', 'articles', {
    //   title: 'Map',
    //   state: 'map'
    // });
  }
}());
