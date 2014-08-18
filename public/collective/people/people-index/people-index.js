angular
  .module('Collective')
  .controller('PeopleIndexController', function($scope, Person){

    Person
      .getList()
      .then(function(people) {

        $scope.people = people;
        $scope.displayed = [];
      });

    // add a new person form
    $scope.add = function() {

      $scope.person = {};
    };

    // remove the new person form
    $scope.cancel = function() {

      delete $scope.person;
    };

    // add a person panel to the view
    $scope.display = function(person) {

      // don't add duplicate panels
      if ($scope.displayed.indexOf(person) !== -1) {

        return;
      }

      $scope.displayed.push(person);
    };

    // hide a person panel from the view
    $scope.hide = function(person) {

      var index = $scope.displayed.indexOf(person);

      $scope.displayed.splice(index, 1);
    };

    // delete an person completely
    $scope.remove = function(person) {

      person.remove();

      var index = $scope.people.indexOf(person);

      $scope.people.splice(index, 1);
    };

    // save the new person
    $scope.save = function() {

      // create a copy so we don't ... ?
      var model = angular.copy($scope.person);

      Person.post(model);

      $scope.people.push(model);

      delete $scope.person;
    };
  });
