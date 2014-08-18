angular
  .module('Collective')
  .controller('PeopleShowController',
    function($scope, $stateParams, Person){

      console.log($scope.person);
      $scope.groups = $scope.person.categorizedGroups();
    });
