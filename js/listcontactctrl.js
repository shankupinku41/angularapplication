// This controller is used to update and edit the contact information of the user.
// functionalities: editUser() and deleteUser()
// Author: Anurag Ghosh
app.controller('listContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    // Defining the table variable data object
    if ($rootScope.tabledata == undefined) {

        $rootScope.tabledata = [{
            "firstname": "Ram",
            "lastname": "Kumar",
            "email": "ram@gmail.com",
            "phonenumber": "9945859687",
            "statususer": "Active",
        }, {
            "firstname": "Shyam",
            "lastname": "Kumar",
            "email": "shyam23@gmail.com",
            "phonenumber": "7829350204",
            "statususer": "Active",
        }, {
            "firstname": "John",
            "lastname": "Shastri",
            "email": "john@gmail.com",
            "phonenumber": "9946374657",
            "statususer": "Inactive",
        }, {
            "firstname": "Bob",
            "lastname": "Dillon",
            "email": "bob32@gmail.com",
            "phonenumber": "8904756487",
            "statususer": "Active",
        }];
    }
	
	$scope.sortType     = 'firstname'; // set the default sort type

    $scope.deletedtextflag = false;
    $scope.successfultextflag = false;
    $scope.editFlag = false;
    $scope.trackrow = "";
    $scope.tablelength = $rootScope.tabledata.length;

    // To edit the user's information and diplay the edit text container in which user can update their details
    $scope.editContact = function(item) {
        $scope.deletedtextflag = false;
        $scope.successfultextflag = false;
        $scope.editFlag = true;
        $scope.trackrow = $rootScope.tabledata.indexOf(item);
        $scope.invalidphonenumber = false;
        $scope.invalidemail = false;
        $scope.invalidstatus = false;
        $scope.invalidformflag = 0;
        $scope.invalidfirstname = false;
        $scope.invalidlastname = false;

        $scope.firstnametext = item.firstname;
        $scope.lastnametext = item.lastname;
        $scope.emailtext = item.email;
        $scope.phonenumbertext = item.phonenumber;
        $scope.statusofcontact = item.statususer;
    }

    // Validations are performed here and details are updated in the table
    $scope.updatecontact = function() {
        $scope.invalidformflag = 0;

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        function validateMobileNumber(phonenumber) {
            var re = /^\d{10}$/;
            return re.test(phonenumber);
        }

        if ($scope.firstnametext == undefined || $scope.firstnametext.length == 0) {
            $scope.invalidformflag = 1;
            $scope.invalidfirstname = true;
        } else {
            $scope.invalidfirstname = false;
        }

        if ($scope.lastnametext == undefined || $scope.lastnametext.length == 0) {
            $scope.invalidformflag = 1;
            $scope.invalidlastname = true;
        } else {
            $scope.invalidlastname = false;
        }

        if (!validateEmail($scope.emailtext)) {
            $scope.invalidformflag = 1;
            $scope.invalidemail = true;
        } else {
            $scope.invalidemail = false;
        }

        if (!validateMobileNumber($scope.phonenumbertext)) {
            $scope.invalidformflag = 1;
            $scope.invalidphonenumber = true;
        } else {
            $scope.invalidphonenumber = false;
        }

        if ($scope.statusofcontact == undefined || $scope.statusofcontact == "") {
            $scope.invalidformflag = 1;
            $scope.invalidstatus = true;
        } else {
            $scope.invalidstatus = false;
        }
        // check if the form is valid,if valid, perform the update operation
        if ($scope.invalidformflag == 0) {
            $rootScope.tabledata[$scope.trackrow].firstname = $scope.firstnametext;
            $rootScope.tabledata[$scope.trackrow].lastname = $scope.lastnametext;
            $rootScope.tabledata[$scope.trackrow].email = $scope.emailtext;
            $rootScope.tabledata[$scope.trackrow].phonenumber = $scope.phonenumbertext;
            $rootScope.tabledata[$scope.trackrow].statususer = $scope.statusofcontact;
            $scope.successfultextflag = true;
            $scope.editFlag = false;
        }
    }

    // delete a contact information
    $scope.deleteContact = function(index) {
        $scope.successfultextflag = false;
        $scope.deletedtextflag = true;
        $rootScope.tabledata.splice(index, 1);
        $scope.tablelength -= 1;
		$scope.editFlag = false;

    }
}]);
