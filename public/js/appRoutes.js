angular.module("appRoutes", []).config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){

        $routeProvider
        
        // home page
        .when("/", {
            templateUrl: "views/home.html",
            controller: "MainController",
        })
        
        
        .when("/sent", {
            templateUrl : "views/sent.html",
            controller: "sentController"
        });
        
        $locationProvider.html5Mode(true);
}]);