angular.module('app', []);



angular.module('app')
  .controller('DemoController', function($scope, $q, $http){

  	  var  	storedCars = [];
  	  var  	storedTimeSlots = [];


  	  $http.get('http://smartninja.betoo.si/api/CMW/cars').then( function(gotCars){storedCars = gotCars.data; getTimeSlots();} , function(){alert("error");} );


  	
	  function getTimeSlots() {
	    return $http.get('http://smartninja.betoo.si/api/CMW/timeslots').then( function(slots){storedTimeSlots = slots.data; show();} , function(){alert("error");} );
	  };
  
	

		function show(){

			storedTimeSlots.forEach(function(timeslot){

		 		for (var i= 0; i < storedCars.length; i++){
		 			if(storedCars[i].id == timeslot.carId){
		 				  timeslot.linkedCar = storedCars[i];
					};
				};
			});

			$scope.timeslots = storedTimeSlots;

		};

		$scope.reserve = function(index){
			storedTimeSlots[index].reserved = true;
			var email = prompt("Na naslov "+storedTimeSlots[index].contactEmail+" bo poslana rezervacija. Prosimo vpisite svoj email naslov:");
			alert("Uspesno rezervirano iz naslova:"+email);
		};






});