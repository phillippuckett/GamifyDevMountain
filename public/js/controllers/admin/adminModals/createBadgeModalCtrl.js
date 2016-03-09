angular.module("GamifyDevMountain")
.controller("createBadgeModalCtrl", function($scope, badgeAdminSvc) {
    $scope.createBadge = function (badge) {
        badgeAdminSvc.createBadge(badge).then(function (result){            
        })
    }
});