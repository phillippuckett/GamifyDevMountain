angular.module('GamifyDevMountain')
    .service('studentSvc', function ($state, $http) {

        this.getBadges = function () {
            return $http.get('/api/badges')
                .then(function (badgeData) {
                    return badgeData.data;
                })
        };

        this.reqBadge = function (badgeId) {
            return $http.put('/api/users/badgerequest/' + badgeId)
                .then(function (badgeData) {
                    return badgeData.data;
                })
        };

        this.getUsersCards = function () {
            return $http.get('/api/cards')
                .then(function (cardData) {
                    return cardData.data;
                })
        };

        this.getCategories = function () {
            return $http.get('/api/categories')
                .then(function (categoryData) {
                    return categoryData.data;
                })
        };

        this.getCohort = function () {
            return $http.get('/api/cohorts')
                .then(function (cohortData) {
                    return cohortData.data;
                })
        };

        this.getCurrs = function () {
            return $http.get('/api/curriculums')
                .then(function (curriculumData) {
                    return curriculumData.data;
                })
        };

        this.getCurr = function (currId) {
            return $http.get('/api/curriculum/' + currId)
                .then(function (curriculumData) {
                    return curriculumData.data;
                })
        };

        this.getStudent = function () {
            return $http.get('/api/users')
                .then(function (studentData) {
                    return studentData.data;
                })
        };
    });