angular.module("GamifyDevMountain")
    .controller("adminCohortCtrl", function ($scope, adminCohortSvc) {
      
        /** C */
        $scope.createCoh = function () {
            adminCohortSvc.createCoh().then(function (result){
                console.log('ADMIN COHORT CONTROLLER:', result);
                $scope.cohort = result.data;
            });
        };
      
        /** R */
        $scope.getCoh = function () {
            adminCohortSvc.getCoh().then(function (result) {
                console.log('ADMIN COHORT CONTROLLER:', result);
                $scope.cohort = result.data;
            });
        };
      
        /** U */
        $scope.updateCoh = function (cohortId) {
            adminCohortSvc.updateCoh(cohortId).then(function (result) {
                $scope.cohort = result.data;
            });
        };
      
        /** D */
        $scope.deleteCoh = function (cohortId) {
            adminCohortSvc.deleteCoh(cohortId).then(function (result) {
                $scope.cohort = result.data;
            });
        };
    });