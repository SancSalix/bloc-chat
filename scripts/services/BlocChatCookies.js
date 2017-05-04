(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'user-header',
        ariaDescribedBy: 'user-body',
        templateUrl: 'templates/user.html',
        backdrop: 'static',
        keyboard: false,
        size: 'modal-sm',
        controller: function($scope, $uibModalInstance) {
          $scope.newUser = function(name) {
            if (name > 4) {
              console.log("I got here");
              $uibModalInstance.close();
              $cookies.put('blocChatCurrentUser', name);
            } else {
              alert("Please enter a valid name");
            }
          }
        }
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
