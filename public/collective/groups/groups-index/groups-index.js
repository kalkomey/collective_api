angular
  .module('Collective')
  .controller('GroupsIndexController',function($scope, Group, Category, query){

    Group.customGET("search", query).then(function(groups){
      $scope.groups = groups
    });

    Category.getList().then(function(categories){
      console.log(categories);
    });
  });
