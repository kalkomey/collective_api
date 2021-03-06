angular.module('Collective')

  // controls individual person panels
  .controller('PersonController', function($scope, GroupsContext, MembershipsContext, Person, Membership) {

    $scope.droppedGroups = [];

    // listen to the collection for any changes
    $scope.$watchCollection('droppedGroups', function(newGroups, oldGroups) {

      // when this changes, there should only ever be one entry
      var newGroup = newGroups[0] || false,
          isUnique  = newGroup && ! _.findWhere($scope.memberships, {employee_id: $scope.person.id, group_id: newGroup.id});

      if (newGroup && isUnique) {

        $scope.addMembership(newGroup);
      }

      $scope.droppedGroups = [];
    });

    // select a group
    $scope.selectGroup  = function(group) {

      group.selected = true;
      group.open = true;
    };

    // add a group to the person
    $scope.addMembership = function(group) {

      MembershipsContext.addMembership({group_id: group.id, employee_id: $scope.person.id});
    };

    // delete a group from the person
    $scope.breakMembership = function(membership) {

      MembershipsContext.breakMembership(membership);
    };
  })

  // person view
  .directive('person', function() {

    return {
      restrict: 'E',
      templateUrl: 'people/templates/person.html',
      controller: 'PersonController'
    };
  });
