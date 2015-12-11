angular.module('app', []);

angular.module('app')
  .controller('TodoController', function($scope, DataFactory){
  	
    $scope.data = DataFactory;

  
      $scope.$on('broTodoAdd', function(event, data) {
        $scope.sporociloDodanTodo="Dodali ste todo: "+data;
        $scope.dodanTodo = true;
        setTimeout(function(){ $scope.dodanTodo = false;  $scope.$apply(); }, 2500);
        

    });

      $scope.$on('broTodoRemove', function(event, data) {
        $scope.sporociloOdstranjenTodo="Odstranili ste todo: "+data;
        $scope.odstranjenTodo = true;
        setTimeout(function(){ $scope.odstranjenTodo = false;  $scope.$apply(); }, 2500);

    });




});


angular.module('app').factory('DataFactory', function($rootScope) {

 var todos = [{tekst:'nekaj moras naredit', stat:false, editbox:false}];

  return({
    todo : todos,
    removeTodo : function(index){
      $rootScope.$broadcast('broTodoRemove', todos[index].tekst );
      todos.splice(index,1);
    },
    statusTodo : function(index){
      if(todos[index].stat == false){
        todos[index].tekst=todos[index].tekst+(' <--opravljeno');
        todos[index].stat = true ;
      }else{
        todos[index].tekst=todos[index].tekst.replace(" <--opravljeno", "");
        todos[index].stat = false ;
      }
    },
    editTodo : function(index){
      if(todos[index].editbox == true){
        todos[index].editbox=false;
      }else{
        todos[index].editbox=true;
      }
    },
    dodajTodo : function(todo){

      var vnosJeNov = true;
      var tempPush =[];
      tempPush.tekst=todo;
      tempPush.stat=false;
      tempPush.editbox=false;

      for(var i = 0; i<todos.length; i++){
        if(todo == todos[i].tekst){
          vnosJeNov = false;
        }

      }
      
      if((todo == "") ||(todo == undefined)){
        alert("Prosim vnesi nekaj");
      }else{
        if(vnosJeNov == true){
          todos.push(tempPush);
          $rootScope.$broadcast('broTodoAdd', todo );
        }else{
          alert("Vnos ze obstaja!");
        } 
      }


      

    
    }
  });

});