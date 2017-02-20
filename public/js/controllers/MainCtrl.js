angular.module("MainCtrl",[]).controller("MainController", function($scope, $resource){
    
	var Mail = $resource('/mail');
    $scope.send = function() {
        var mail = new Mail();
        mail.to = $scope.to;
        mail.content = $scope.content;
        $scope.to = "";
        $scope.content = "";
        mail.$save();

    };
});