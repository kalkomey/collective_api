angular
  .module('Collective')
  .controller('GroupsShowController', function($scope, PeopleContext, Group, Person){

    $scope.selectPerson = function(person) {

      var selPerson = _.findWhere(PeopleContext.people, {id: person.id});

      selPerson.selected = true;
    };

    $scope.deselectPerson = function(person) {

      var selPerson = _.findWhere(PeopleContext.people, {id: person.id});

      selPerson.selected = false;
    };
  });
