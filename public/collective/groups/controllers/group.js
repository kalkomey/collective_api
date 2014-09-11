angular.module('Collective')

  // controls the individual group panels
  .controller('GroupController', function($scope, PeopleContext, MembershipsContext, Group, Person, Membership) {

    $scope.droppedPeople = [];

    // listen to the collection for any changes
    $scope.$watchCollection('droppedPeople', function(newPeople, oldPeople) {

      // when this changes, there should only ever be one entry
      var newPerson = newPeople[0] || false,
          isUnique  = newPerson && ! _.findWhere($scope.memberships, {group_id: $scope.group.id, employee_id: newPerson.id});

      if (newPerson && isUnique) {

        $scope.addMembership(newPerson);
      }

      $scope.droppedPeople = [];
    });

    // set a person in the group to selected
    $scope.selectPerson = function(person) {

      person.selected = true;
      person.open = true;
    };

    // add a person to the group
    $scope.addMembership = function(person) {

      MembershipsContext.addMembership({group_id: $scope.group.id, employee_id: person.id});
    };

    // delete a group from the person
    $scope.breakMembership = function(membership) {

      MembershipsContext.breakMembership(membership);
    };
  })

  // single group view
  .directive('group', function() {

    return {
      restrict: 'E',
      templateUrl: 'groups/templates/group.html',
      controller: 'GroupController'
    };
  });
