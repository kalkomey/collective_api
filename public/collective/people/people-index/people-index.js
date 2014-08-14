angular
  .module('Collective')
  .controller('PeopleIndexController', function($scope, Person){

    Person.getList().then(function(people){
      $scope.people = people;
    });

    // add a new person form
    $scope.add = function() {
      $scope.person = {};
    };

    // save the new person
    $scope.save = function() {
      // create a copy so we don't ... ?
      var model = angular.copy($scope.person);

      Person.post({person: model});

      $scope.people.push(model);

      delete $scope.person;
    };

    // remove the new person form
    $scope.cancel = function() {
      delete $scope.person;
    };

    // delete an person completely
    $scope.remove = function(person) {
      person.remove();

      var index = $scope.people.indexOf(person);

      $scope.people.splice(index, 1);
    };
  });
