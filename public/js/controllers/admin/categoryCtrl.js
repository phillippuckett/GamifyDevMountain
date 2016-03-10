angular.module("GamifyDevMountain")
    .controller("catCtrl", function($scope, categorySvc) {

        $scope.addCategory = function(newCategory) {
            var cat = {
                categoryTitle: newCategory
            };
            categorySvc.createCategory(cat)
                .then(function(response) {
                    $scope.categories.push(cat);
                });
        };

        // don't get rid of this
        categorySvc.getCategories()
            .then(function(response) {
                $scope.categories = response;
            })

    });