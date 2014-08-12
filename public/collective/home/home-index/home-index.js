angular
  .module('Collective')
  .controller('HomeIndexController',function($scope){
    $scope.navigation = [
      { text: "People", sref: "home.employees" },
      { text: "Groups", sref: "home.groups" }
    ];
  });
