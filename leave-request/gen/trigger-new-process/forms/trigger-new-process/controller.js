const formView = angular.module('forms', ['ideUI', 'ideView']);

formView.controller('FormController', ['$scope', '$http', function ($scope, $http) {

    $scope.forms = {
        form: {}
    };

    $scope.model = {};
    $scope.model.param2 = 0;

    $scope.model.param1 = "";
    $scope.model.param2 = 0;
    
    $scope.onTriggerClicked = function(){
        $http.post("/services/ts/leave-request/api/ProcessService.ts/processes", JSON.stringify($scope.model)).then(function (response) {
            if (response.status != 202) {
                alert(`Unable to trigger a new process: '${response.message}'`);
                return;
            }
            alert("A new process instance has been triggered.\nResponse: " + JSON.stringify(response.data));
        });
    }
    

}]);