angular.module('Collective', ['ui.bootstrap', 'ui.utils', 'ui.router', 'restangular', 'ngAnimate', 'ngDragDrop'])

  // states setup
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

    $stateProvider
      .state('app', {
        abstract: true,
        controller: function($scope, PeopleContext, GroupsContext, MembershipsContext) {

          $scope.people       = PeopleContext.people;
          $scope.groups       = GroupsContext.groups;
          $scope.memberships  = MembershipsContext.extendMemberships();
        },
        resolve: {
          'MyServiceData': function(MembershipsContext) {
            return MembershipsContext.promise;
          }
        }
      })
      .state('app.home', {
        url: '/home'
      });

    // add new states above
    $urlRouterProvider.otherwise('/home');
  })

  // init!
  .run(function($rootScope, $state, $stateParams) {

    $rootScope.$state       = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.safeApply = function(fn) {

        var phase = $rootScope.$$phase;

        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        }
        else {
            this.$apply(fn);
        }
    };
  })

  // main view
  .directive('mainView', function() {

    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'home/templates/home.html',
    };
  })

  // navigation view
  .directive('navigation', function() {

    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'home/templates/navigation.html'
    };
  });
