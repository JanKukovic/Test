angular.module('app', []);

angular.module('app')
  .controller('TodoController', function($scope){
  	
  	$scope.removeTodo = function(index){
  		$scope.todos.splice(index,1);
  	}

    $scope.statusTodo = function(index){
      if($scope.todos[index].stat == false){
        $scope.todos[index].tekst=$scope.todos[index].tekst+(' <--opravljeno');
        $scope.todos[index].stat = true ;
      }else{
        $scope.todos[index].tekst=$scope.todos[index].tekst.replace(" <--opravljeno", "");
        $scope.todos[index].stat = false ;
        console.log($scope.todos[index].tekst.replace(" <--opravljeno", ""));
      }
    }

    $scope.editTodo = function(index){
      if($scope.todos[index].editbox == true){
        $scope.todos[index].editbox=false;
      }else{
        $scope.todos[index].editbox=true;
      }
    }

  	$scope.dodajTodo = function(todo){

  		var vnosJeNov = true;
      var tempPush =[];
      tempPush.tekst=todo;
      tempPush.stat=false;
      tempPush.editbox=false;
      console.log(tempPush);

  		for(var i = 0; i<$scope.todos.length; i++){
  			if(todo == $scope.todos[i].tekst){
  				vnosJeNov = false;
  			}

  		}
  		
  		if(todo == ""){
  			alert("Prosim vnesi nekaj");
  		}else{
  			if(vnosJeNov == true){
	  			$scope.todos.push(tempPush);
	  		}else{
  				alert("Vnos ze obstaja!");
  			}	
  		}

 		
  	}


});