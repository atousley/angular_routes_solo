myApp.controller('SerenablairController', ['$scope', function($scope) {

    $scope.showThis = false
    $scope.showPhoto = function () {
        $scope.showThis = true;
    }

}]);