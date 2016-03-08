angular.module('GamifyDevMountain')
    .directive('studentDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/studentTmpl.html',
            controller: function ($scope, studentSvc, authSvc, $http) {
                $scope.studentDir = 'Student Directive';
                // console.log('Student Controller: Running');
                
                /** Cards on the Table */
                $scope.getCards = function (cardData) {
                    studentSvc.getUsersCards(cardData).then(function (cardData) {
                        $scope.cards = cardData;
                    })
                };
                $scope.getCards();
                
                /** Toggle Badge Request Modal */
                $scope.modButton = false;
                $scope.modToggle = function () {
                    $scope.reqModal = !$scope.reqModal;
                    console.log('TOGGLE');
                }
                
                /** Withdraw Request */
                $scope.wdrawReq = function () {
                    
                }
                
                /** Submit Request */
               $scope.sbmtReq = function () {
                   
               }
              
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

                /** Trophy Medal Levels */
                $scope.NBSGP = function (card) {
                    var tpa = 0;
                    var tpp = 0;
                    for (var i = 0; i < card.badges.length; i++) {
                        if ($scope.user.badgesAwarded.indexOf(card.badges[i]._id) !== -1) {
                            tpa += card.badges[i].pointValue.points;
                        }
                    }
                    for (var j = 0; j < card.badges.length; j++) {
                        tpp += card.badges[j].pointValue.points;
                    }
                    var perc = (tpa / tpp) * 100;
                    if (perc > 100) {
                        return "/media/img/trophyplatinum.png"
                    }
                    if (perc >= card.trophyLevels.gold) {
                        return "/media/trophygold.png"
                    }
                    if (perc >= card.trophyLevels.silver) {
                        return "/media/trophysilver.png"
                    }
                    if (perc >= card.trophyLevels.bronze) {
                        return "/media/trophybronze.png"
                    }
                    else {
                        return "/media/awardEmblems/trophyNone.png"
                    }
                };
            }
        }
    });