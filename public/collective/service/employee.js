angular
  .module('Collective')
  .factory('Employee', function(Restangular) {
    var service = Restangular.service("employees");

    Restangular.extendModel("employees", function(model){
      model.categorizedGroups = function(){
        return _.groupBy(this.groups, function(group){
          return group.category;
        })
      }

      return model;
    });


    return service;
  });
