angular
  .module('Collective')
    .controller('PeopleIndexController', function($scope, Person, Restangular){

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

        // create a copy so we can get rid of $scope.person ASAP
        var model = Restangular.copy($scope.person);
        var save  = Person.post(model);

        // save.$object is a promise that gets updated when the save is complete
        $scope.people.push(save.$object);

        delete $scope.person;
      };
    });
