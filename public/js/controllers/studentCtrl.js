/*------------------------STUDENT STATE CONTROLLER------------------------*/
angular.module("GamifyDevMountain")
    .controller("studentCtrl", function ($scope, studentSvc, authSvc, $http) {
        $scope.studentCtrl = "studentCtrl";
        // console.log('Student Controller: Running');
    });
/*------------------------STUDENT STATE CONTROLLER------------------------*/   
 
/*------------------------STUDENT DIRECTIVE------------------------*/
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
                
                /** Toggle Badge-Request Modal */
                $scope.modButton = false;
                $scope.modToggle = function (badgeId) {
                    if (badgeId) {
                        $scope.badgeRequested = badgeId;
                    }
                    $scope.reqModal = !$scope.reqModal;
                    console.log('TOGGLE');
                }
                
                /** Withdraw Request */
                // $scope.wdrawReq = function () {
                //     studentSvc.reqBadge().then(function () {

                //     })
                // }
                
                /** Submit Request */
                $scope.sbmtReq = function () {
                    console.log($scope.badgeRequested);
                    studentSvc.reqBadge($scope.badgeRequested).then(function (adminResponse) {
                        $scope.getCards();
                    })
                }
              
                /** Total Points */
                authSvc.getUserObject().then(function (userData) {
                    var curriculumCards = userData.data.cohort.curriculum.deck;
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
                        return "/media/awardEmblems/trophyplatinum.png"
                    }
                    if (perc >= card.trophyLevels.gold) {
                        return "/media/awardEmblems/trophygold.png"
                    }
                    if (perc >= card.trophyLevels.silver) {
                        return "/media/awardEmblems/trophysilver.png"
                    }
                    if (perc >= card.trophyLevels.bronze) {
                        return "/media/awardEmblems/trophybronze.png"
                    }
                    else {
                        return "/media/awardEmblems/trophyNone.png"
                    }
                };

                /*------------------------EXP METER------------------------*/
                $scope.totalPointsPossible = function () {
                    var total = 0;
                    if ($scope.user.cohort) {
                        $scope.user.cohort.curriculum.deck.forEach(function (card) {
                            card.badges.forEach(function (badge) {
                                total += badge.pointValue.points;
                            })
                        })
                        return total;
                    }
                }

                $scope.expPer = function () {
                    if ($scope.User) {
                        return $scope.User.earnedPoints / $scope.totalPointsPossible() * 100;
                    }
                }

            }
        }
    }); 
/*------------------------STUDENT DIRECTIVE------------------------*/    
       