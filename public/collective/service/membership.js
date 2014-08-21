angular
  .module('Collective')
  .factory('Membership', function(Restangular) {
    // TODO (Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

    var collection  = Restangular.all('memberships'),
        service     = Restangular.service("memberships");

    service["remove"] = _.bind(collection["remove"], collection);

    return service;
  });
