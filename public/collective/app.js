angular.module('Collective', ['ui.bootstrap', 'ui.utils', 'ui.router', 'restangular', 'ngAnimate']);

angular
  .module('Collective')
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home-index/home-index.html',
        controller: 'HomeIndexController'
      })
      .state('home.employees', {
        url: '/employees',
        views: {
          "list@home": {
            templateUrl: 'employees/employees-index/employees-index.html',
            controller: 'EmployeesIndexController'
          }
        }
      })
      .state('home.employees.show', {
        url: '/:id',
        views: {
          "show@home": {
            templateUrl: 'employees/employees-show/employees-show.html',
            controller: 'EmployeesShowController'
          }
        }
      })
      .state('home.guilds', {
        url: '/guilds',
        views: {
          "list@home": {
            templateUrl: 'groups/groups-index/groups-index.html',
            controller: 'GroupsIndexController'
          },
          "show@home": {
            templateUrl: 'groups/groups-show/groups-show.html',
            controller: 'GroupsShowController'
          }
        },
        resolve: {
          query: function(){
            return { category: "guild" }
          }
        }
      })
      .state('home.guilds.show', {
        url: '/:id',
        views: {
          "show@home": {
            templateUrl: 'groups/groups-show/groups-show.html',
            controller: 'GroupsShowController'
          }
        }
      });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home/employees');

});

angular.module('Collective').run(function($rootScope, $state, $stateParams) {
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
