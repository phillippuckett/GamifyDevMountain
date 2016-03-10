angular.module('GamifyDevMountain')
    .service('adminSvc', function ($state, $http) {

        /*------------------------BADGES------------------------*/
        this.getBadges = function () {
            return $http.get('/api/badges')
                .then(function (badgeData) {
                    return badgeData.data;
                })
        };

        this.getBadge = function (badgeId) {
            return $http.get('/api/badge' + badgeId)
                .then(function (result) {
                    return result.data;
                })
        };

        this.badge = {};
        this.createBadge = function (badge) {
            return $http.post('/api/badges', badge)
                .then(function (badgeData) {
                    return badgeData.data;
                })
        };

        this.editBadges = function (badgeId) {
            return $http.put('/api/badges' + badgeId)
                .then(function (badgeData) {
                    return badgeData.data;
                })
        };

        this.deleteBadges = function (badgeId) {
            return $http.delete('/api/badges' + badgeId)
                .then(function (deletedBadge) {
                    return deletedBadge.data;
                })
        };

        /*------------------------CARDS------------------------*/
        this.getCards = function () {
            return $http.get('/api/cards')
                .then(function (cardData) {
                    return cardData.data;
                })
        };

        this.getCard = function (cardId) {
            return $http.get('/card' + cardId)
                .then(function (cardData) {
                    return cardData.data;
                })
        };

        this.createCards = function (card) {
            return $http.post('/api/cards', card)
                .then(function (cardData) {
                    return cardData.data;
                })
        };

        this.editCards = function (cardId) {
            return $http.put('/api/cards' + cardId)
                .then(function (cardData) {
                    return cardData.data;
                })
        };


        this.deleteCards = function (cardId) {
            return $http.delete('/api/cards' + cardId)
                .then(function (cardData) {
                    return cardData.data;
                })
        };
        
        /*------------------------CATEGORIES------------------------*/
        this.getCatagories = function () {
            return $http.get('/api/catagories')
                .then(function (catagoryData) {
                    return catagoryData.data;
                })
        };

        this.getCatagory = function (badgeId) {
            return $http.get('/api/catagory' + badgeId)
                .then(function (categoryData) {
                    return categoryData.data;
                })
        };


        this.createCatagories = function (cat) {
            return $http.post('/api/Catagories', cat)
                .then(function (CatagoryData) {
                    return CatagoryData.data;
                })
        };


        this.editCatagories = function (catId) {
            return $http.put('/api/Catagories' + catId)
                .then(function (editedCat) {
                    return editedCat.data;
                })
        };


        this.deleteCatagories = function (catId) {
            return $http.delete('/api/Catagories' + catId)
                .then(function (deletedCat) {
                    return deletedCat.data;
                })
        };

        /*------------------------COHORTS------------------------*/
        this.createCoh = function (coh) {
            return $http.post('/api/cohorts', coh)
                .then(function (cohortData) {
                    return cohortData.data;
                })
        };

        this.getCohs = function () {
            return $http.get('/api/cohorts')
                .then(function (cohortData) {
                    return cohortData.data;
                })
        };

        this.getCoh = function () {
            return $http({
                method: 'GET',
                url: '/cohort?_id=' + id
            });
        };

        this.editCoh = function (cohId) {
            return $http.put('/api/cohorts' + cohId)
                .then(function (editedCoh) {
                    return editedCoh.data;
                })
        };

        this.deleteCoh = function (cohId) {
            return $http.delete('/api/cohorts' + cohId)
                .then(function (deletedCoh) {
                    return deletedCoh.data;
                })
        };

        /*------------------------CURRICULUMS------------------------*/
        this.getCurrs = function () {
            return $http.get('/api/curriculums')
                .then(function (curriculumData) {
                    return curriculumData.data;
                })
        };

        this.getCurr = function () {
            return $http({
                method: 'GET',
                url: '/curriculum?_id=' + id
            });
        };

        this.createCurr = function (curr) {
            return $http.post('/api/curriculums', curr)
                .then(function (curriculumData) {
                    return curriculumData.data;
                })
        };


        this.editCurr = function () {
            return $http({
                method: 'PUT',
                url: '/api/curriculums' + id,
                data: curriculum
            })
                .then(function (curriculumData) {
                    return curriculumData.data;
                })
        };


        this.deleteCurrs = function (currId) {
            return $http.delete('/api/curriculums' + currId)
                .then(function (deletedCurr) {
                    return deletedCurr.data;
                })
        };
        
        /*------------------------STUDENTS------------------------*/
        this.getStudents = function () {
            return $http.get('/api/students')
                .then(function (studentData) {
                    return studentData.data;
                })
        };

        this.getStudent = function () {
            return $http({
                method: 'GET',
                url: '/student?_id=' + id
            });
        };

        this.createStudents = function (studentId) {
            return $http.post('/api/students', studentId)
                .then(function (studentData) {
                    return studentData.data;
                })
        };

        this.editStudents = function (studentId) {
            return $http.put('/api/students' + studentId)
                .then(function (editedStudent) {
                    return editedStudent.data;
                })
        };


        this.deleteStudents = function (studentId) {
            return $http.delete('/api/students' + studentId)
                .then(function (deletedStudent) {
                    return deletedStudent.data;
                })
        };
    });
