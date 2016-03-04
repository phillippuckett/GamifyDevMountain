
angular.module('GamifyDevMountain')
    .service('viewSvc', function ($state, $http) {
       
        /** Badges */
        this.getBadges = function () {
            return $http({
                method: 'GET',
                url: '/api/badges'
            }).then(function (badgeData) {
                return badgeData.data;
            })
        };
       
        /** Cards */
        this.getUsersCards = function () {
            return $http({
                method: "GET",
                url: '/api/cards'
            }).then(function (cardData) {
                return cardData.data;
            })
        };
        
        /** Categories */
        this.getCategories = function () {
            return $http({
                method: "GET",
                url: '/api/categories'
            }).then(function (categoryData) {
                return categoryData.data;
            })
        };
        
        /** Cohorts */
        this.getCohort = function () {
            return $http({
                method: "GET",
                url: '/api/cohorts'
            }).then(function (cohortData) {
                return cohortData.data;
            })
        };

        /** Curriculums */
        this.getCurriculums = function () {
            return $http({
                method: "GET",
                url: '/api/curriculums'
            }).then(function (curriculumData) {
                return curriculumData.data;
            })
        };
        
        /** Student */
        this.getStudent = function () {
            return $http({
                method: "GET",
                url: '/api/users'
            }).then(function (studentData) {
                return studentData.data;
            })
        };
    });