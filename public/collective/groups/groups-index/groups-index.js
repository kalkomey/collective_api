angular
  .module('Collective')
  .controller('GroupsIndexController',function($scope, Group, Category, query){

    Group
      .customGET("search", query)
      .then(function(groups) {

        $scope.groups     = groups;
        $scope.displayed  = [];
      });

    Category
      .getList()
      .then(function(categories) {

        $scope.categories = categories;
      });

    // add a new group form
    $scope.add = function() {

      $scope.group          = {};
      $scope.group.category = $scope.categories[0];
    };

    // remove the new group form
    $scope.cancel = function() {

      delete $scope.group;
    };

    // add a group panel to the view
    $scope.display = function(group) {

      // don't add duplicate panels
      if ($scope.displayed.indexOf(group) !== -1) {

        return;
      }

      $scope.displayed.push(group);
    };

    // hide a group panel from the view
    $scope.hide = function(group) {

      var index = $scope.displayed.indexOf(group);

      $scope.displayed.splice(index, 1);
    };

    // delete an group completely
    $scope.remove = function(group) {

      group.remove();

      var index = $scope.groups.indexOf(group);

      $scope.groups.splice(index, 1);
    };

    // save the new group
    $scope.save = function() {

      // create a copy so we can get rid of group ASAP
      var model = angular.copy($scope.group);

      Group.post({name: model.name, category_id: model.category.id, description: ''});

      $scope.groups.push({name: model.name, category: model.category.name});

      delete $scope.group;
    };
  });
