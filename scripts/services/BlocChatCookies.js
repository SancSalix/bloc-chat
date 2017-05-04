(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-header',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/user.html',
        size: 'modal-sm',
        controller: function($scope, $uibModalInstance) {
          $scope.newUser = function(name) {
            $uibModalInstance.close();
            $cookies.put('blocChatCurrentUser', name);
          }
        }
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
