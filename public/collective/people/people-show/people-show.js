angular
  .module('Collective')
  .controller('PeopleShowController',
    function($scope, $stateParams, Person){
      Person.one($stateParams.id).get().then(function(person){
        $scope.person = person;
        $scope.groups = person.categorizedGroups();
      });
    });
