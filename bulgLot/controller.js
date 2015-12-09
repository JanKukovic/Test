angular.module('app', []);



angular.module('app')
  .controller('DemoController', function($scope, $q){


  


  	function obljubaSt(){
  		
  		var deferred = $q.defer();
  		var timeout = nakljucnostevilo(2000,5000);
  		var temp= {}; // ko narediš var temp = [], da raje narediš var temp = {}. Tako boš naredil objekt in ne array.
  		 temp.st = preveriPodvajanje(nakljucnostevilo(1,100));
  		 temp.delay = timeout;

  		 	

  		 setTimeout(function() {

  		 	deferred.resolve(temp);
       		} , timeout);


        return deferred.promise;

  	};

  	$scope.zrebaj = function(){
  		$scope.zrebanja = [];

  		obljubaSt().then(function(result) { 
  		$scope.zrebanja.push(result);
  			obljubaSt().then(function(result) { 
	  		$scope.zrebanja.push(result);
	  			obljubaSt().then(function(result) { 
		  		$scope.zrebanja.push(result);
		  		}, function(error) {
			        alert("napaka");
			    });
	  		}, function(error) {
		        alert("napaka");
		    });
  		}, function(error) {
	        alert("napaka");
	    });
  	};

  	var preveriPodvajanje = function(st){
  		
  		$scope.zrebanja.forEach(function(zreb){
  		 	if(st == zreb.st){
  			 st = nakljucnostevilo(1,100);
  			 st = preveriPodvajanje(st);
  		 	};
  		 });

  		return st
  	};

  	function nakljucnostevilo(min,max){
  		return Math.floor(Math.random()*(max-min+1)+min);
  	};


  });