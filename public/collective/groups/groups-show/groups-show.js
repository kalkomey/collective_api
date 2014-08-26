angular
  .module('Collective')
    .controller('GroupsShowController', function($scope, PeopleContext, MembershipsContext, Group, Person, Membership) {

      // listen to the collection for any changes
      $scope.$watchCollection('group.people', function(newPeople, oldPeople) {

        // we need to do something only if a person was added
        if (newPeople.length <= oldPeople.length) {

          return;
        }

        // for now we can assume that the last person is the new person
        var newPerson = newPeople[newPeople.length - 1];

        $scope.addPerson(newPerson);
      });

      // set a person in the group to selected
      $scope.selectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = true;
      };

      // deselect a person in the group
      $scope.deselectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = false;
      };

      // add a person to the group
      $scope.addPerson = function(person) {

        var promise     = Membership.post({group_id: $scope.group.id, employee_id: person.id}),
            addedPerson = _.findWhere(PeopleContext.people, {id: person.id}),
            index;

        if (addedPerson) {

          index = addedPerson.groups.push($scope.group);
        }
      };

      // delete a person from a group
      $scope.removePerson = function(person) {

        Membership.customDELETE('destroy', {group_id: $scope.group.id, employee_id: person.id} );

        var index = $scope.group.people.indexOf(person);

        $scope.group.people.splice(index, 1);

        var removedPerson = _.findWhere(PeopleContext.people, {id: person.id});

        if (removedPerson) {

          index = removedPerson.groups.indexOf($scope.group.id);

          removedPerson.groups.splice(index, 1);
        }
      };
    });
