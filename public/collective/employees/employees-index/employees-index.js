angular
  .module('Collective')
  .controller('EmployeesIndexController', function($scope, Employee){

    console.log(Employee);

    Employee.getList().then(function(employees){
      $scope.employees = employees
    });

    $scope.add = function() {
      $scope.employee = {};
    };

    $scope.save = function() {
      var model = angular.copy($scope.employee);

      Employee.post({employee: model});

      $scope.employees.push(model);

      delete $scope.employee;
    };

    $scope.cancel = function() {
      delete $scope.employee;
    };
  });
