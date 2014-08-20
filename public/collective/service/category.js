angular
  .module('Collective')
  .factory('Category', function(Restangular) {

    // TODO(Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

    var collection  = Restangular.all("categories"),
        service     = Restangular.service("categories");

    service["remove"] = _.bind(collection["remove"], collection);

    return service;
  });
