angular
  .module('Collective')
  .controller('GroupsIndexController',function($scope, Group, Category, query){

    Group.customGET("search", query).then(function(groups){
      $scope.groups = groups
    });

    Category.getList().then(function(categories){
      $scope.categories = categories;
    });

    // add a new group form
    $scope.add = function() {
      $scope.group = {};
      $scope.group.category = $scope.categories[0];
    };

    // remove the new group form
    $scope.cancel = function() {
      delete $scope.group;
    };

    // delete an group completely
    $scope.remove = function(group) {
      console.log($scope.groups);
      group.remove();

      var index = $scope.groups.indexOf(group);

      $scope.groups.splice(index, 1);
    };

    // save the new group
    $scope.save = function() {
      // create a copy so we can get rid of group ASAP
      var model = angular.copy($scope.group);

      Group.post({name: model.name, category_id: model.category.id, description: ''});

      $scope.groups.push({name: model.name, category: model.category.name});

      delete $scope.group;
    };
  });
