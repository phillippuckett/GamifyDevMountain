/* Administrator */
angular.module('GamifyDevMountain')
    .controller('adminCtrl', function (ModalService, $scope, $state, $location, adminSvc) {


        $scope.activeDir = {};
        $scope.toggleDirs = $scope.toggleDirs;
        
        /*------------------------BADGES------------------------*/
        $scope.badges = [];
        $scope.getBadges = function () {
            adminSvc.getBadges()
                .then(function (response) {
                    $scope.badges = response;
                })
        };
        $scope.getBadges();
        $scope.getBadge = function (badgeId) {
            adminSvc.getbadge(badgeId)
                .then(function (response) {
                    $scope.badge = response;
                })
        };

        $scope.createBadge = function (badge) {
            adminSvc.createBadge(badge)
                .then(function (response) {
                    $scope.createBadge();
                })
        };

        $scope.updateBadge = function (id, updatedBadge) {
            adminSvc.getBadges(id, updatedBadge)
                .then(function (response) {
                    $scope.getBadges();
                })
        };

        $scope.deleteBadge = function (badgeId) {
            adminSvc.deleteBadge(badgeId)
                .then(function (response) {
                    $scope.getBadges();
                })
        };

        $scope.newCard = { badges: [] };
        $scope.selectBadge = function (selectedBadge) {
            $scope.newCard.badges.push(selectedBadge);
        };
         
        /*------------------------BADGE MODAL------------------------*/
        $scope.confirmationAnswer = null;
        $scope.showAModal = function () {
            ModalService.showModal({
                templateUrl: "/html/modals/createBadgeModal.html",
                controller: "modalCtrl"})
                .then(function (modal) {
                    modal.close.then(function (then) {
                        $scope.confirmationAnswer = then;
                    });
                });
        };
        /*------------------------BADGE MODAL------------------------*/
        
        /*------------------------CARDS------------------------*/
        $scope.badges = [];
        $scope.getCards = function () {
            adminSvc.getCards()
                .then(function (response) {
                    $scope.cards = response;
                });
        };
        $scope.getCards();

        $scope.createCard = function (card) {
            adminSvc.createCard(card)
                .then(function (response) {
                    $scope.getCards();
                });
        };
              
        /*------------------------CATEGORIES------------------------*/
        $scope.createCat = function (cat) {
            adminSvc.createCategory(cat)
                .then(function (response) {
                    $scope.categories.push(response);
                });
        };

        $scope.getCats = function (cat) {
            adminSvc.getCategories()
                .then(function (response) {
                    $scope.categories = response;
                })
        };
        
        /*------------------------COHORTS------------------------*/
        $scope.cohort = {};
        // console.log('COHORT:', $scope.cohort);
        $scope.createCoh = function () {
            adminSvc.createCoh($scope.cohort).then(function (result) {
                console.log('COHORT CREATED:', result);
                $scope.cohort = result.data;
            });
        };

        $scope.getCoh = function () {
            adminSvc.getCoh().then(function (result) {
                console.log('COHORT RETRIEVED:', result);
                $scope.cohort = result.data;
            });
        };

        $scope.updateCoh = function (cohortId) {
            adminSvc.updateCoh(cohortId).then(function (result) {
                console.log('COHORT UPDATED:', result);
                $scope.cohort = result.data;
            });
        };

        $scope.deleteCoh = function (cohortId) {
            adminSvc.deleteCoh(cohortId).then(function (result) {
                console.log('COHORT DELETED:', result);
                $scope.cohort = result.data;
            });
        };
        
        /*------------------------CURRICULUMS------------------------*/
        $scope.newCurr = { deck: [] };

        $scope.selectCard = function (selectedCard) {
            $scope.newCurriculum.deck.push(selectedCard);
        };

        $scope.getCurrs = function (curr) {
            adminSvc.getCurrs(curr)
                .then(function (response) {
                    $scope.curriculums = response;
                })
        };

        $scope.getCurr = function (currId) {
            adminSvc.getcurr(currId)
                .then(function (response) {
                    $scope.getCurr(response);
                })
        };

        $scope.createCurr = function (curr) {
            adminSvc.createCurriculum(curr)
                .then(function (response) {
                    $scope.getCurrs(response);
                })
        };

        $scope.updateCurr = function (id, updatedCurr) {
            adminSvc.getCurrs(id, updatedCurr)
                .then(function (response) {
                    $scope.getCurrs();
                })
        };

        $scope.deleteCurr = function (currId) {
            adminSvc.deleteCurriculum(currId)
                .then(function (response) {
                    $scope.getCurrs();
                })
        };

        $scope.getCards = function () {
            adminSvc.getCards()
                .then(function (response) {
                    $scope.cards = response;
                    // console.log('CARDS:', $scope.cards);
                })
        };
        $scope.getCards();
    
        /*------------------------STUDENTS------------------------*/
        $scope.getStudents = function (students) {
            adminSvc.getStudents(students)
                .then(function (response) {
                    $scope.students = response;
                })
        };

        $scope.getStudent = function (studentId) {
            adminSvc.getstudent(studentId)
                .then(function (response) {
                    $scope.student = response;
                })
        };

        $scope.createStudent = function (student) {
            adminSvc.createStudent(student)
                .then(function (response) {
                    $scope.getStudents();
                })
        };

        $scope.updateStudent = function (id, updatedStudent) {
            $scope.getStudents(id, updatedStudent)
                .then(function (response) {
                    $scope.getStudents();
                })
        };

        $scope.deleteStudent = function (id) {
            adminSvc.deleteStudent(id)
                .then(function (response) {
                    $scope.getStudents();
                })
        };
        
        /*------------------------CRUD MODAL------------------------*/
        $scope.confirmationAnswer = null;                
        $scope.showAModal = function () {
            ModalService.showModal({
                templateUrl: "/html/modals/createBadgeModal.html",
                controller: "modalCtrl"})
                .then(function (modal) {
                    modal.close.then(function (then) {
                        $scope.confirmationAnswer = then;
                    })
                });
        };
    }); 