angular.module('Collective')

  // controls the main people panel
  .controller('PeopleController', function($scope, PeopleContext, MembershipsContext, Person, Restangular) {

    // initialize a new person
    $scope.new = function(){

      $scope.person = {};
    };

    // reset the new person form
    $scope.cancelNew = function() {

      delete $scope.person;
    };

    // flag a person as not selected
    $scope.deselect = function(person) {

      person.selected = false;
    };

    // delete a person
    $scope.remove = function(person) {

      person
        .remove()
          .then(function() {

            $scope.people = _.without($scope.people, person);
          });
    };

    // save a person
    $scope.saveNew = function() {

      var model   = angular.copy($scope.person),
          promise = Person.post(model);

      delete $scope.person;

      $scope.people.push(promise.$object);
    };

    // flag a person as selected
    $scope.select = function(person) {

      person.selected = true;
    };
  })

  // people view
  .directive('people', function() {

    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'people/templates/people.html',
      controller: 'PeopleController',
      scope: {
        groups: '=',
        people: '=',
        memberships: '='
      }
    };
  });
