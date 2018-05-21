app.controller('addContactCtrl', ['$scope', '$rootScope', function($scope,$rootScope) {
	

	$scope.invalidphonenumber=false;
	$scope.invalidemail=false;
	$scope.invalidstatus=false;
	$scope.invalidformflag=0;
	$scope.invalidfirstname=false;
	$scope.invalidlastname=false;
	if($rootScope.tabledata==undefined)
	{
		
		$rootScope.tabledata = [{"firstname":"Ram","lastname":"Kumar","email":"ram@gmail.com","phonenumber":"9947385746","statususer":"Active"},{"firstname":"Shyam","lastname":"Kumar","email":"shyam23@gmail.com","phonenumber":"9947385746","statususer":"Active"},{"firstname":"John","lastname":"Shastri","email":"john@gmail.com","phonenumber":"9947385746","statususer":"Inactive"},{"firstname":"Bob","lastname":"Dillon","email":"bob32@gmail.com","phonenumber":"9947385746","statususer":"Active"}];		
	}
	else{
		
	}
	$scope.addUser = function(){
		$scope.invalidformflag =0;
		function validateEmail(email) {
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  return re.test(email);
		}
		
		function validateMobileNumber(phonenumber) {
		  var re = /^\d{10}$/;
		  return re.test(phonenumber);
		}
		
		if($scope.firstname == undefined || $scope.firstname.length == 0){
			$scope.invalidformflag = 1;
			$scope.invalidfirstname=true;
		}
		else{
			$scope.invalidfirstname=false;
		}
		
		if($scope.lastname == undefined || $scope.lastname.length == 0){
			$scope.invalidformflag = 1;
			$scope.invalidlastname=true;
		}
		else{
			$scope.invalidlastname=false;
		}
		
		if(!validateEmail($scope.email)){
			$scope.invalidformflag = 1;
			$scope.invalidemail=true;
		}
		else{
			$scope.invalidemail=false;
		}
		
		if(!validateMobileNumber($scope.phonenumber)){
			$scope.invalidformflag =1;
			$scope.invalidphonenumber=true;
		}
		else{
			$scope.invalidphonenumber=false;
		}
		
		if($scope.statususer == undefined || $scope.statususer ==""){
			$scope.invalidformflag = 1;
			$scope.invalidstatus=true;
		}
		else{
			$scope.invalidstatus=false;
		}
		
		if($scope.invalidformflag == 0){
			
			$rootScope.tabledata.push({ firstname: $scope.firstname, lastname: $scope.lastname, email:$scope.email , phonenumber:$scope.phonenumber, statususer: $scope.statususer });
		
		$scope.firstname='';
		$scope.lastname='';
		$scope.email='';
		$scope.phonenumber='';
		$scope.statususer='';
		}
	}
	
	
}]); 
