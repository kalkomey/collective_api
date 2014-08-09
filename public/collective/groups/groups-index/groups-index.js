angular
  .module('Collective')
  .controller('GroupsIndexController',function($scope, Group, query){
    $scope.category = query.category;

    Group.customGET("search", query).then(function(groups){
      $scope.groups = groups
    })
  });
