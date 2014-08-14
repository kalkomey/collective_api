angular
  .module('Collective')
  .controller('GroupsShowController', function($scope, $stateParams, Group, Person){
    Group.one($stateParams.id).get().then(function(group){
      $scope.group = group
    })

    Person.getList().then(function(people){
      $scope.people  = people;
      // $scope.selectable = angular.clone(people)
      //
      // $scope.filterAssociatedPeople = function(person){
      //   return _.find($scope.people, function(e){
      //     e.name == person.name
      //   });
      // }
    })

  });
