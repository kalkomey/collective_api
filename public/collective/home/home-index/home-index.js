angular
  .module('Collective')
  .controller('HomeIndexController',function($scope){
    $scope.navigation = [
      { text: "Employees", sref: "home.employees" },
      { text: "Guilds", sref: "home.guilds" }
    ];
  });
