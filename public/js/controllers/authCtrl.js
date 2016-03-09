angular.module('GamifyDevMountain')
    .controller('authCtrl', function ($scope, $state, authSvc) {     
        
        /** The User Object */
        $scope.user = {};
        // console.log($scope.user);
   
        /** Login */
        $scope.login = function (user) {
            authSvc.login(user).then(function (user) {
                // console.log(user);
                if (user.Login === true) {
                    // console.log('Auth Controller: Successful Log In');
                    $state.go('student');
                }
            }).catch(function (err) {
                if (err.status === 401) {
                    alert('Auth Controller: Invalid Login');
                } else {
                    console.error(err);
                }
            });
        };
  
        /** Registration */
        $scope.register = function () {
            authSvc.register($scope.user).then(function (response) {
                    console.log('AUTHCTRL: Successful Registration', response);
                    $scope.user = response;
                })
        };
    });