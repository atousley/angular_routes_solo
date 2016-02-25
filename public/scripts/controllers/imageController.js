myApp.controller('ImageController', ['$scope', function($scope) {

    $scope.showThis = false;

    $scope.showPhoto = function () {
        $scope.showThis = true;
    }

}]);