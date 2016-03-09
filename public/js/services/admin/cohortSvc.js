angular.module("GamifyDevMountain")
    .service("adminCohortSvc", function ($http) {
        
        /** C */
        this.createCoh = function () {
            return $http.create('api/cohorts').then(function (createdCoh) {
                return createdCoh;
            })
        };
        
        /** R */
        this.getCoh = function () {
            return $http.get('api/cohorts').then(function (cohort) {
                return cohort;
            })
        };
        
        /** U */
        this.updateCoh = function (cohortId) {
            return $http.put('api/cohorts/' + cohortId).then(function (updatedCoh) {
                return updatedCoh;
            })
        };
        
        /** D */
        this.deleteCoh = function (cohortId) {
            return $http.delete('api/cohorts' + cohortId).then(function (deletedCoh) {
                return deletedCoh;
            })
        };
    });