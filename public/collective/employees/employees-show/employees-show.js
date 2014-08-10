angular
  .module('Collective')
  .controller('EmployeesShowController',
    function($scope, $stateParams, Employee){
      Employee.one($stateParams.id).get().then(function(employee){
        $scope.employee = employee;
        $scope.groups = employee.categorizedGroups();
      });
    });
