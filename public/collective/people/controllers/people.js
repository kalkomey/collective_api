angular.module('Collective')

  // controls the main people panel
  .controller('PeopleController', function($scope, PeopleContext, MembershipsContext, Restangular) {

    $scope.status = {openFirst: true};

    // listen to the collection for any changes
    $scope.$watch('people', function() {

      // when this changes, there should only ever be one entry
      var isOpenPerson  = _.findWhere($scope.people, {open: true});

      $scope.status.openFirst = ! isOpenPerson;
    }, true);

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
      person.open = false;
    };

    // save a person
    $scope.saveNew = function() {

      var newPerson = angular.copy($scope.person);

      PeopleContext.addPerson(newPerson);

      delete $scope.person;
    };

    // flag a person as selected
    $scope.select = function(person) {

      person.selected  = true;
      person.open      = true;
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
