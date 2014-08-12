angular
  .module('Collective')
  .controller('EmployeesIndexController', function($scope, Employee){

    Employee.getList().then(function(employees){
      $scope.employees = employees;
    });

    // add a new employee form
    $scope.add = function() {
      $scope.employee = {};
    };

    // save the new employee
    $scope.save = function() {
      // create a copy so we don't ... ?
      var model = angular.copy($scope.employee);

      Employee.post({employee: model});

      $scope.employees.push(model);

      delete $scope.employee;
    };

    // remove the new employee form
    $scope.cancel = function() {
      delete $scope.employee;
    };

    // delete an employee completely
    $scope.remove = function(employee) {
      employee.remove();

      var index = $scope.employees.indexOf(employee);

      $scope.employees.splice(index, 1);
    };
  });
