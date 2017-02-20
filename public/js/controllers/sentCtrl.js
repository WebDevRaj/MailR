angular.module("sentCtrl", []).controller("sentController", function($scope, $resource){
  var sentMails = $resource('/sent');

  sentMails.query( function(results) {
  	$scope.mails = results;
  });
});