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
                    $scope.User = userData.data;
                    var curriculumCards = userData.data.cohort.curriculum.deck;
                    var currPoints = 0;
                    curriculumCards.forEach(function (card) {
                        console.log(card);
                        card.badges.forEach(function (badge) {
                            currPoints += badge.pointValue.points;
                        });
                    });
                    $scope.currPoints = currPoints;
                    $scope.trophyTotals = $scope.trophyCount();
                });

                $scope.totalCardPoints = function (card) {
                    var cardPoints = 0;
                    card.badges.forEach(function (badge) {
                        cardPoints += badge.pointValue.points;
                    })
                    return cardPoints;
                };

                /*TROPHY COUNTER*/
                $scope.trophyCount = function () {
                    if ($scope.User) {
                        console.log('Trophy Counter', $scope.User)
                        var trophies = { bronze: 0, silver: 0, gold: 0 };
                        for (var i = 0; i < $scope.User.cohort.curriculum.deck.length; i++) {
                            var tpa = 0;
                            var tpp = 0;
                            for (var j = 0; j < $scope.User.cohort.curriculum.deck[i].badges.length; j++) {
                                for (var k = 0; k < $scope.User.badgesAwarded.length; k++) {
                                    if ($scope.User.badgesAwarded[k]._id === $scope.User.cohort.curriculum.deck[i].badges[j]._id) {
                                        tpa += $scope.User.cohort.curriculum.deck[i].badges[j].pointValue.points;
                                    }
                                }
                            }


                            for (var l = 0; l < $scope.User.cohort.curriculum.deck[i].badges.length; l++) {
                                tpp += $scope.User.cohort.curriculum.deck[i].badges[l].pointValue.points;
                            }
                            var perc = (tpa / tpp) * 100;
                            if (perc >= $scope.User.cohort.curriculum.deck[i].trophyLevels.gold) {
                                trophies.gold += 1;
                            }
                            if (perc >= $scope.User.cohort.curriculum.deck[i].trophyLevels.silver) {
                                trophies.silver += 1;
                            }
                            if (perc >= $scope.User.cohort.curriculum.deck[i].trophyLevels.bronze) {
                                trophies.bronze += 1;
                            }

                        }
                        return trophies
                    }
                };

            }
        }
    });