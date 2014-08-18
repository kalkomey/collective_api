angular
  .module('Collective')
    .controller('PeopleIndexController', function($scope, Person, Restangular){

      $scope.people = Person.getList().$object;

      /**
       * Initialize a new person.
       */
      $scope.add = function(){
        $scope.person = {};
      };

      /**
       * Reset the new person form.
       */
      $scope.cancel = function() {
        delete $scope.person;
      };

      /**
       * Flag a person as selected
       */
      $scope.select = function(person) {
        person.selected = true;
      };

      /**
       * Flag a person as not selected
       */
      $scope.deselect = function(person) {
        person.selected = false;
      };

      /**
       * Delete a person.
       */
      $scope.remove = function(person) {
        person.remove().then(function(){
          $scope.people = _.without($scope.people, person);
        })
      };

      /**
       * Save a person.
       */
      $scope.save = function() {
        var model   = angular.copy($scope.person)
          , promise = Person.post(model);

        delete $scope.person;

        $scope.people.push(promise.$object);
      };
    });
