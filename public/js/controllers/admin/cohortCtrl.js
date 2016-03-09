angular.module("GamifyDevMountain")
    .controller("adminCohortCtrl", function ($scope, adminCohortSvc) {
      
        /** C */
        $scope.cohort = {};
        console.log('COHORT:', $scope.cohort);
        $scope.createCoh = function () {
            adminCohortSvc.createCoh($scope.cohort).then(function (result) {
                console.log('COHORT CREATED:', result);
                $scope.cohort = result.data;
            });
        };
      
        /** R */
        $scope.getCoh = function () {
            adminCohortSvc.getCoh().then(function (result) {
                console.log('COHORT RETRIEVED:', result);
                $scope.cohort = result.data;
            });
        };
      
        /** U */
        $scope.updateCoh = function (cohortId) {
            adminCohortSvc.updateCoh(cohortId).then(function (result) {
                console.log('COHORT UPDATED:', result);
                $scope.cohort = result.data;
            });
        };
      
        /** D */
        $scope.deleteCoh = function (cohortId) {
            adminCohortSvc.deleteCoh(cohortId).then(function (result) {
                console.log('COHORT DELETED:', result);
                $scope.cohort = result.data;
            });
        };
    });