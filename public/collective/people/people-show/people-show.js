angular
  .module('Collective')
    .controller('PeopleShowController',
      function($scope, GroupsContext, Person, Membership) {

        $scope.groups = $scope.person.categorizedGroups();

        // listen to the collection for any changes
        $scope.$watchCollection('person.groups', function(newGroups, oldGroups) {

          // we need to do something only if a person was added
          if (newGroups.length <= oldGroups.length) {

            return;
          }

          // for now we can assume that the last person is the new person
          var newGroup = newGroups[newGroups.length - 1];

          $scope.addGroup(newGroup);
        });

        // select a group
        $scope.selectGroup  = function(group) {

          var selGroup          = _.findWhere(GroupsContext.groups, {id: group.id});
              selGroup.selected = true;
        };

        // deselect a group
        $scope.deselectGroup = function(group) {

          var selGroup          = _.findWhere(GroupsContext.groups, {id: group.id});
              selGroup.selected = false;
        };

        // add a group to the person
        $scope.addGroup = function(group) {

          var promise = Membership.post({group_id: group.id, employee_id: $scope.person.id});
        };

        // delete a group from the person
        $scope.removeGroup = function(group) {

          Membership.customDELETE('destroy', {group_id: group.id, employee_id: $scope.person.id} );

          var index = $scope.person.groups.indexOf(group);

          $scope.person.groups.splice(index, 1);
        };
      });
