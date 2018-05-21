app.controller('listContactCtrl', ['$scope', '$rootScope', function($scope,$rootScope)  {
	
	
	if($rootScope.tabledata==undefined)
	{
		
		$rootScope.tabledata = [{"firstname":"Ram","lastname":"Kumar","email":"ram@gmail.com","phonenumber":"9947385746","statususer":"Active"},{"firstname":"Shyam","lastname":"Kumar","email":"shyam23@gmail.com","phonenumber":"9947385746","statususer":"Active"},{"firstname":"John","lastname":"Shastri","email":"john@gmail.com","phonenumber":"9947385746","statususer":"Inactive"},{"firstname":"Bob","lastname":"Dillon","email":"bob32@gmail.com","phonenumber":"9947385746","statususer":"Active"}];		
	}
	else{
		
	}
	$scope.editFlag = false;
	$scope.trackrow="";
	$scope.tablelength = $rootScope.tabledata.length;
	$scope.editContact = function(index){
	$scope.editFlag = true;
	$scope.trackrow=index;
	$scope.invalidphonenumber=false;
	$scope.invalidemail=false;
	$scope.invalidstatus=false;
	$scope.invalidformflag=0;
	$scope.invalidfirstname=false;
	$scope.invalidlastname=false;
	
	$scope.firstnametext = $rootScope.tabledata[index].firstname;
	$scope.lastnametext = $rootScope.tabledata[index].lastname;
	$scope.emailtext = $rootScope.tabledata[index].email;
	$scope.phonenumbertext = $rootScope.tabledata[index].phonenumber;
	$scope.statusofcontact=$rootScope.tabledata[index].statususer;
}

$scope.updatecontact = function(){
	$scope.invalidformflag =0;
		function validateEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		}
		
		function validateMobileNumber(phonenumber) {
		  var re = /^\d{10}$/;
		  return re.test(phonenumber);
		}
		
		if($scope.firstnametext == undefined || $scope.firstnametext.length == 0){
			$scope.invalidformflag = 1;
			$scope.invalidfirstname=true;
		}
		else{
			$scope.invalidfirstname=false;
		}
		
		if($scope.lastnametext == undefined || $scope.lastnametext.length == 0){
			$scope.invalidformflag = 1;
			$scope.invalidlastname=true;
		}
		else{
			$scope.invalidlastname=false;
		}
		
		if(!validateEmail($scope.emailtext)){
			$scope.invalidformflag = 1;
			$scope.invalidemail=true;
		}
		else{
			$scope.invalidemail=false;
		}
		
		if(!validateMobileNumber($scope.phonenumbertext)){
			$scope.invalidformflag =1;
			$scope.invalidphonenumber=true;
		}
		else{
			$scope.invalidphonenumber=false;
		}
		
		if($scope.statusofcontact == undefined || $scope.statusofcontact ==""){
			$scope.invalidformflag = 1;
			$scope.invalidstatus=true;
		}
		else{
			$scope.invalidstatus=false;
		}
		
		if($scope.invalidformflag == 0){
	$rootScope.tabledata[$scope.trackrow].firstname = $scope.firstnametext;
	$rootScope.tabledata[$scope.trackrow].lastname = $scope.lastnametext;
	$rootScope.tabledata[$scope.trackrow].email = $scope.emailtext;
	$rootScope.tabledata[$scope.trackrow].phonenumber = $scope.phonenumbertext;
	$rootScope.tabledata[$scope.trackrow].statususer = $scope.statusofcontact;
	$scope.editFlag = false;
		}
}


$scope.deleteContact = function(index){
	$rootScope.tabledata.splice(index, 1);
	$scope.tablelength -=1;
	
}	
}]); 
