angular.module('app', []);

angular.module('app')
  .controller('TodoController', function($scope){
  	
  	$scope.removeTodo = function(index){
  		$scope.todos.splice(index,1);
  	}


  	$scope.dodajTodo = function(todo){

  		console.log(todo);
  		var vnosJeNov = true;

  		for(var i = 0; i<todo.length; i++){
  			if(todo == $scope.todos[i]){
  				vnosJeNov = false;
  			}

  		}
  		
  		if(todo == ""){
  			alert("Prosim vnesi nekaj");
  		}else{
  			if(vnosJeNov == true){
	  			$scope.todos.push(todo);
	  		}else{
  				alert("Vnos ze obstaja!");
  			}	
  		}

 		
  	}


});