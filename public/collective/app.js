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
          templateUrl: 'home/home-index/home-index.html',
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
          url: '/home',
          views: {
            "people@app": {
              templateUrl: 'people/people-index/people-index.html',
              controller: 'PeopleIndexController'
            },
            "person@app.home" : {
              templateUrl: "people/people-show/people-show.html",
              controller: 'PeopleShowController'
            },
            "groups@app": {
              templateUrl: 'groups/groups-index/groups-index.html',
              controller: 'GroupsIndexController'
            },
            "group@app.home" : {
              templateUrl: "groups/groups-show/groups-show.html",
              controller: 'GroupsShowController'
            },
          }
        });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

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
