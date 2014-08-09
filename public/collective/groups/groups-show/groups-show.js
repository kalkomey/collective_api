angular
  .module('Collective')
  .controller('GroupsShowController', function($scope, $stateParams, Group){
    Group.one($stateParams.id).get().then(function(group){
      $scope.group = group
    })
  });
