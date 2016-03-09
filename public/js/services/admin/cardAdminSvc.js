angular.module("GamifyDevMountain").service("cardAdminSvc", function ($http) {
    // card get
    this.getCards = function () {
        return $http({
            method: 'GET',
            url: '/api/cards'
        })
            .then(function (cardData) {
                return cardData.data;
            })
    };

    this.createCard = function (card) {
        console.log('attempting to post?');
        return $http({
            method: 'POST',
            url: '/api/cards',
            data: card
        })
            .then(function (cardData) {
                return cardData.data;
            })
    };

});