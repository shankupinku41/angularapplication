/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularapplication', [
    'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function($routeProvider) {
								$routeProvider
								.when("/", {
										templateUrl: "home.html",
										controller: "" })
                                .when("/addContact", {
                                        templateUrl: "partials/addcontact.html",
                                        controller: "addContactCtrl" })
                                .when("/listContacts", {
                                         templateUrl: "partials/listcontacts.html",
                                         controller: "listContactCtrl" })
                                         
										 
								.when("/contactMe", {
                                         templateUrl: "partials/contactme.html",
                                         controller: "contact_me" })		
								
										// else 404
								.otherwise("/404", {
										templateUrl: "partials/404.html",
										controller: ""});
								}]);


