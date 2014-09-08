angular.module('Collective')

  // controls the main groups panel
  .controller('GroupsController',function($scope, Restangular, GroupsContext, Group, Category) {

    Category
      .getList()
          .then(function(categories) {

            $scope.categories = categories;
          });

    // add a new group form
    $scope.new = function() {

      $scope.group          = {};
      $scope.group.category = $scope.categories[0];
    };

    // remove the new group form
    $scope.cancelNew = function() {

      delete $scope.group;
    };

    // flag a person as not selected
    $scope.deselect = function(group) {

      group.selected = false;
    };

    // delete a group completely
    $scope.remove = function(group) {

      group.remove();

      var index = $scope.groups.indexOf(group);

      $scope.groups.splice(index, 1);
    };

    // save the new group
    $scope.saveNew = function() {

      // create a copy so we can get rid of $scope.group ASAP
      var model   = angular.copy($scope.group),
          promise = Group.post({name: model.name, category_id: model.category.id, description: ''});

      delete $scope.group;

      $scope.groups.push(promise.$object);
    };

    // flags a groups as selected
    $scope.select = function(group) {

      group.selected = true;
    };
  })

  // groups view
  .directive('groups', function() {

    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'groups/templates/groups.html',
      controller: 'GroupsController',
      scope: {
        groups: '=',
        people: '=',
        memberships: '='
      }
    };
  });
