/**
 * Main AngularJS Web Application
 */
// Initialisation of the angular module
var app = angular.module('angularapplication', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	// Setting html5Mode as true to remove hashtag
		$locationProvider.html5Mode(true);
    $routeProvider
        .when("/", {
            templateUrl: "home.html",
            controller: ""
        })
        .when("/addContact", {
            templateUrl: "partials/addcontact.html",
            controller: "addContactCtrl"
        })
        .when("/listContacts", {
            templateUrl: "partials/listcontacts.html",
            controller: "listContactCtrl"
        })


        .when("/contactMe", {
            templateUrl: "partials/contactme.html",
            controller: "contact_me"
        })

        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: ""
        });
}]);

