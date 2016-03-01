angular.module('GamifyDevMountain')
    .directive('studentDir', function () {
        return {
            restrict: 'E',
            templateUrl: 'html/templates/studentTmpl.html',
            controller: function ($scope, viewSvc, $http) {
                $scope.studentDir = 'Student Directive';
                // console.log('Student Controller: Running');
               
                $scope.getCards = function (cardData) {
                    viewSvc.getCards(cardData).then(function (cardData) {
                        $scope.cards = cardData;
                    })
                };
                $scope.getCards();
                
                $scope.cardTotalPoints = function (card) {
                    var totalPoints = 0;
                    // console.log(card);
                    card.badges.forEach(function (badge) {
                        totalPoints += badge.pointValue.points;
                    })
                    return totalPoints
                };
            }
        }
    });