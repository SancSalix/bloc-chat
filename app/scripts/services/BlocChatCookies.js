(function() {
  function BlocChatCookies($cookies, $uibModal, $firebaseArray) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    var ref = firebase.database().ref().child("userID");
    var users = $firebaseArray(ref);
    var errorCode = null;
    var errorMessage = null;
    var requirementsMet = true;
    var userAuth = null;

    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-header',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'templates/user.html',
        backdrop: 'static',
        keyboard: false,
        size: 'modal-sm',
        controller: function($scope, $uibModalInstance) {
          $scope.newUser = function(newName, newEmail, newPassword, confirm) {
            if (newName == undefined) {
              requirementsMet = false;
              alert("Please enter a name");
            } else if (newPassword !== confirm) {
              requirementsMet = false;
              alert("Passwords do not match, please re-enter");
            } else if (newName.length <= 4) {
              requirementsMet = false;
              alert("Please enter a valid name longer than 4 characters");
            } else if (newEmail.length <= 4) {
              requirementsMet = false;
              alert("Please enter a valid email");
            } else {
              requirementsMet = true;
            }
            if (requirementsMet == true) {
              $cookies.put('blocChatCurrentUser', newName);
              alert(newName);
              firebase.auth().createUserWithEmailAndPassword(newEmail, newPassword).then(function() {
                  userAuth = firebase.auth().currentUser;
                  userAuth.updateProfile({
                    displayName: newName
                  });
                })
                .catch(function(error) {
                  errorCode = error.code;
                  errorMessage = error.message;
                  alert(errorMessage);
                });
              users.$add({
                name: newName
              });
              $uibModalInstance.close();
            }
          };
          $scope.login = function(name, email, password) {
            $cookies.put('blocChatCurrentUser', name);
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
              errorCode = error.code;
              errorMessage = error.message;
              alert(errorMessage);
            });
            $uibModalInstance.close();
          }
        }
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$firebaseArray', BlocChatCookies]);
})();
