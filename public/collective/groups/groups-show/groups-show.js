angular
  .module('Collective')
  .controller('GroupsShowController', function($scope, $stateParams, Group, Employee){
    Group.one($stateParams.id).get().then(function(group){
      $scope.group = group
    })

    Employee.getList().then(function(employees){
      $scope.employees  = employees;
      // $scope.selectable = angular.clone(employees)
      //
      // $scope.filterAssociatedEmployees = function(employee){
      //   return _.find($scope.employees, function(e){
      //     e.name == employee.name
      //   });
      // }
    })

  });
