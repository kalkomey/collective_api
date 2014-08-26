angular
  .module('Collective')
  .factory('Category', function(Restangular) {

    // TODO(Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

   return Restangular.all('categories');
  });
