angular
  .module('Collective')
  .factory('Membership', function(Restangular) {
    // TODO (Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

    return Restangular.all('memberships');
  });
