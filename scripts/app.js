(function() {
    function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
    }


    angular
        .module('blocChat', ['ui.router'])
        .config(config);
})();
