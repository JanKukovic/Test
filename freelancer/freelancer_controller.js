angular.module('app', []);

angular.module('app')
  .controller('freelancerController', function($scope){

  	$scope.forme = [{id: 0, name: 'povpraševanje po spletni strani', izbrano: false}, {id : 1, name: 'povpraševanje po AngularJS obrazcu', izbrano: false},{ id : 2, name: 'povpraševanje po svetovanju', izbrano: false}];

  	$scope.$watch('selectedItem', function(newValue, oldValue){
  	 	if(newValue != undefined){
	    	for(var i=0; i < $scope.forme.length; i++){
	  	 		$scope.forme[i].izbrano=false;
	  		};
	  	 	$scope.forme[newValue.id].izbrano=true;
		 };

	});
	  	



});