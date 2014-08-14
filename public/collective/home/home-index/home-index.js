angular
  .module('Collective')
  .controller('HomeIndexController',function($scope){
    $scope.navigation = [
      { text: "People", sref: "home.people" },
      { text: "Groups", sref: "home.groups" }
    ];
  });
