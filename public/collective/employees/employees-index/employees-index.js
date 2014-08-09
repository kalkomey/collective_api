angular
  .module('Collective')
  .controller('EmployeesIndexController', function($scope, Employee){
    Employee.getList().then(function(employees){
      $scope.employees = employees
    })
  });
