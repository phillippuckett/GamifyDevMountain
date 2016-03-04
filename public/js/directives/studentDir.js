angular.module('GamifyDevMountain')
    .directive('studentDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/studentTmpl.html',
            controller: function ($scope, viewSvc, authSvc, $http) {
                $scope.studentDir = 'Student Directive';
                // console.log('Student Controller: Running');
               
                /** Cards on the Table */
                $scope.getCards = function (cardData) {
                    viewSvc.getUsersCards(cardData).then(function (cardData) {
                        $scope.cards = cardData;
                    })
                };
                $scope.getCards();
                
                /** Total Points */
                $scope.cardTotalPoints = function (card) {
                    var totalPoints = 0;
                    // console.log(card);
                    card.badges.forEach(function (badge) {
                        totalPoints += badge.pointValue.points;
                    })
                    return totalPoints
                };
              
                /** Users Badges */

                /** Users Trophies */

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