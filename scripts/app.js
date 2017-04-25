(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/index.html'
        });
    }

    angular
        .module('blocChat', ['ui.router'])
        .config(config);
})();
