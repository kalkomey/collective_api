angular
  .module('Collective')
    .controller('GroupsShowController', function($scope, PeopleContext, MembershipsContext, Group, Person, Membership) {

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
    .directive('group', function() {

      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'groups/templates/group.html',
        controller: 'GroupsShowController'
      };
    });
