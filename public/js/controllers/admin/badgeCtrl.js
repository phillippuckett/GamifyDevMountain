angular.module("GamifyDevMountain")
    .controller("badgeCtrl", function ($scope, adminStateSvc, ModalService) {

        var ass = adminStateSvc;

        // ############### Badges ################ \\
        $scope.badges = [];
        console.log('badgeCtrl is logging');
        ass.getBadges()
            .then(function (response) {
                console.log('badges', response);
                $scope.badges = response;
            });

        $scope.updateBadge = function (id, updatedBadge) {
            $scope.getBadges(id, updateBadge)
                .then(function (response) {
                    $scope.getBadges();
                });
        }
    
        /*------------------------BADGE MODAL------------------------*/
        $scope.confirmationAnswer = null;
        $scope.showAModal = function () {
            console.log("showAModal is being called");
            ModalService.showModal({
                templateUrl: "/html/modals/createBadgeModal.html",
                controller: "createBadgeModalCtrl"
            })
                .then(function (modal) {
                    //function that runs when modal closes
                    modal.close.then(function (then) { // then will equal whatever happened to close it.
                        $scope.confirmationAnswer = then;
                        console.log(then); // logs user to the console
                    });
                });
        };
        /*------------------------BADGE MODAL------------------------*/

    });