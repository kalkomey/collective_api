angular
  .module('Collective')
    .controller('GroupsIndexController',function($scope, Restangular, GroupsContext, Group, Category, query) {

      $scope.groups = GroupsContext.groups;

      GroupsContext.search(query);

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

      // flag a person as not selected
      $scope.deselect = function(group) {

        group.selected = false;
      };

      // delete an group completely
      $scope.remove = function(group) {

        group.remove();

        var index = $scope.groups.indexOf(group);

        $scope.groups.splice(index, 1);
      };

      // save the new group
      $scope.save = function() {

        // create a copy so we can get rid of $scope.group ASAP
        var model = Restangular.copy($scope.group);

        Group.post({name: model.name, category_id: model.category.id, description: ''});

        $scope.groups.push({name: model.name, category: model.category.name});

        delete $scope.group;
      };

      // flags a groups as selected
      $scope.select = function(group) {

        group.selected = true;
      };
    });
