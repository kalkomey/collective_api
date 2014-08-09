angular
  .module('Collective')
  .factory('Group', function(Restangular) {
    // TODO(Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files
    
    var collection = Restangular.all('groups')
      , service    = Restangular.service("groups");

    service["customGET"] = _.bind(collection["customGET"], collection);

    return service;
  });
