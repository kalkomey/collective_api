angular
  .module('Collective')
    .controller('PeopleShowController',
      function($scope, GroupsContext, Person, Membership) {

        $scope.groups = $scope.person.categorizedGroups();

        $scope.$watchCollection('person.groups', function(newGroups, oldGroups) {

          // we need to do something only if a person was added
          if (newGroups.length <= oldGroups.length) {

            return;
          }

          // for now we can assume that the last person is the new person
          var newGroup = newGroups[newGroups.length - 1];

          $scope.addGroup(newGroup);
        });

        $scope.selectGroup  = function(group) {

          var selGroup          = _.findWhere(GroupsContext.groups, {id: group.id});
              selGroup.selected = true;
        };

        $scope.deselectGroup = function(group) {

          var selGroup          = _.findWhere(GroupsContext.groups, {id: group.id});
              selGroup.selected = false;
        };

        $scope.addGroup = function(group) {

          var promise = Membership.post({group_id: group.id, employee_id: $scope.person.id});
        };
      });
