angular.module('app', []);

angular.module('app')
  .controller('MLBController', function($scope){
  	

  	$scope.izracunajVar = function(){
  		$scope.izracunVar=($scope.stMesVpl*$scope.visMesVpl)+($scope.stMesVpl*$scope.visMesVpl*$scope.mesObr/100*12);
  	}

   	$scope.izracunajIzp = function(){
  		$scope.izracunIzp=($scope.stMesIzp*$scope.visMesIzp);
  	}
   


});