(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('modal', {
        url: '/add',
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modalLook.html'
      })
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
