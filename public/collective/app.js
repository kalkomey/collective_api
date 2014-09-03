angular
  .module('Collective', ['ui.bootstrap', 'ui.utils', 'ui.router', 'restangular', 'ngAnimate', 'ngDragDrop']);

angular
  .module('Collective')
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
        })
        ;

      /* Add New States Above */
      $urlRouterProvider.otherwise('/home');
    })
    .directive('mainView', function() {

      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'home/templates/home.html'
      };
    })
    .directive('navigation', function() {

      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'home/templates/navigation.html'
      };
    });

angular
  .module('Collective')
    .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.safeApply = function(fn) {
          var phase = $rootScope.$$phase;
          if (phase === '$apply' || phase === '$digest') {
              if (fn && (typeof(fn) === 'function')) {
                  fn();
              }
          } else {
              this.$apply(fn);
          }
      };
    });
