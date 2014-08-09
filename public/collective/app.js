angular.module('Collective', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('Collective').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('employees', {
        url: '/employees',
        views: {
          "@": {
            templateUrl: 'employees/employees-index/employees-index.html',
            controller: 'EmployeesIndexController'
          },
          "show@employees": {
            templateUrl: 'employees/employees-show/employees-show.html',
            controller: 'EmployeesShowController'
          }
        }
    });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('Collective').run(function($rootScope) {

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
