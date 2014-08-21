angular
  .module('Collective')
    .controller('GroupsShowController', function($scope, PeopleContext, Group, Person, Membership) {

      $scope.selectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = true;
      };

      $scope.deselectPerson = function(person) {

        var selPerson           = _.findWhere(PeopleContext.people, {id: person.id});
            selPerson.selected  = false;
      };

      $scope.addPerson = function(a, b, c, d) {
//console.log(a, b, c, d);
        //var promise = Membership.post({group_id: $scope.group.id, employee_id: person.id});

        //$scope.group.people.push(person);
      };
    });
