angular
  .module('Collective')
    .factory('Group', function(Restangular) {
      // TODO(Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

      return Restangular.all('groups');
    });
