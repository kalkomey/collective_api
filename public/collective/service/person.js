angular
  .module('Collective')
  .factory('Person', function(Restangular) {
    // TODO(Joshua Kappers) https://github.com/mgonto/restangular/pull/809/files

    // Restangular.extendModel("employees", function(model){

    //   model.categorizedGroups = function(){

    //     return _.groupBy(this.groups, function(group){

    //       return group.category;
    //     });
    //   };

    //   return model;
    // });

    return Restangular.all('employees');
  });
