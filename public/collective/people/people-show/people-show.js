angular
  .module('Collective')
  .controller('PeopleShowController',
    function($scope, GroupsContext, Person){

      $scope.groups = $scope.person.categorizedGroups();

      $scope.selectGroup = function(group) {

        var selGroup = _.findWhere(GroupsContext.groups, {id: group.id});

        selGroup.selected = true;
      };

      $scope.deselectGroup = function(group) {

        var selGroup = _.findWhere(GroupsContext.groups, {id: group.id});

        selGroup.selected = false;
      };
    });
