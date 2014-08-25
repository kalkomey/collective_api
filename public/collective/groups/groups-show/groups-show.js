angular
  .module('Collective')
    .controller('GroupsShowController', function($scope, PeopleContext, Group, Person, Membership) {

      $scope.$watchCollection('group.people', function(newPeople, oldPeople) {

        // we need to do something only if a person was added
        if (newPeople.length <= oldPeople.length) {

          return;
        }

        // for now we can assume that the last person is the new person
        var newPerson = newPeople[newPeople.length - 1];

        $scope.addPerson(newPerson);
      });

      $scope.selectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = true;
      };

      $scope.deselectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = false;
      };

      $scope.addPerson = function(person) {

        var promise = Membership.post({group_id: $scope.group.id, employee_id: person.id});
      };
    });
