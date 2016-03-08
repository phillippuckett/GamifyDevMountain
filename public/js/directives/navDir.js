angular.module('GamifyDevMountain')
    .directive('navDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/navTmpl.html',
            controller: function ($scope, authSvc) {
                $scope.navDir = 'navDir';
                // console.log('Nav Controller: Running');
                
                /** Total Points */
                authSvc.getUserObject().then(function (userData) {
                    var curriculumCards = userData.data.cohort.curriculum.card;
                    var currPoints = 0;
                    curriculumCards.forEach(function (card) {
                        card.badges.forEach(function (badge) {
                            currPoints += badge.pointValue.points;
                        });
                    });
                    $scope.currPoints = currPoints;
                });

                $scope.totalCardPoints = function (card) {
                    var cardPoints = 0;
                    card.badges.forEach(function (badge) {
                        cardPoints += badge.pointValue.points;
                    })
                    return cardPoints;
                };

            }
        }
    });