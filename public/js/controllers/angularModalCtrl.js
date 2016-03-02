GamifyDevMountain.controller('modalController', function($scope, close) {

 $scope.dismissModal = function(result) {
    close(result, 200);
 };

});
