const formView = angular.module('forms', ['ideUI', 'ideView']);

formView.controller('FormController', ['$scope', '$http', function ($scope, $http) {

    $scope.forms = {
        form: {}
    };

    $scope.model = {};

    $scope.model.fromDate = new Date();
    $scope.model.toDate = new Date();
    
    $scope.onSubmitClicked = function(){
        console.log("Model:" + JSON.stringify($scope.model));
        $http.post("/services/ts/leave-request/api/ProcessService.ts/processes", JSON.stringify($scope.model)).then(function (response) {
            if (response.status != 202) {
                alert(`Unable to trigger a new process: '${response.message}'`);
                return;
            }
            alert("Submit request has been created.\nResponse: " + JSON.stringify(response.data));
        });
    }
    

}]);