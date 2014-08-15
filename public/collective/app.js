angular.module('Collective', ['ui.bootstrap', 'ui.utils', 'ui.router', 'restangular', 'ngAnimate']);

angular
  .module('Collective')
  .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('/api/v1');
    RestangularProvider.setRequestSuffix('.json');

    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          "@": {
            templateUrl: 'home/home-index/home-index.html',
            controller: 'HomeIndexController'
          },
          "people@home": {
            templateUrl: 'people/people-index/people-index.html',
            controller: 'PeopleIndexController'
          },
          "groups@home": {
            templateUrl: 'groups/groups-index/groups-index.html',
            controller: 'GroupsIndexController',
            resolve: {
              query: function(){
                return {};
              }
            }
          }
        }
      })
      // .state('home.people', {
      //   url: '/people',
      //   views: {
      //     "list@home": {
      //       templateUrl: 'people/people-index/people-index.html',
      //       controller: 'PeopleIndexController',
      //       restrict: 'E'
      //     }
      //   }
      // })
      // .state('home.people.show', {
      //   url: '/:id',
      //   views: {
      //     "show@home": {
      //       templateUrl: 'people/people-show/people-show.html',
      //       controller: 'PeopleShowController'
      //     }
      //   }
      // })
      // .state('home.groups', {
      //   url: '/groups',
      //   views: {
      //     "list@home": {
      //       templateUrl: 'groups/groups-index/groups-index.html',
      //       controller: 'GroupsIndexController'
      //     }
      //   },
      //   resolve: {
      //     query: function(){
      //       return {}
      //     }
      //   }
      // })
      // .state('home.groups.show', {
      //   url: '/:id',
      //   views: {
      //     "show@home": {
      //       templateUrl: 'groups/groups-show/groups-show.html',
      //       controller: 'GroupsShowController'
      //     }
      //   }
      // })
      ;

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

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
