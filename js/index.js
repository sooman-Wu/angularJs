var todo = angular.module('todoList',[]);
todo.controller('mainCtrl',['$scope',function($scope){
  if(localStorage.ss){
            $scope.events = angular.fromJson(localStorage.ss);
          }else{
            $scope.events=[];
          }
      
      $scope.saveData = function(){
        localStorage.ss=angular.toJson($scope.events)
      }
  $scope.colors = ['green','yellow','orange','pink','purple','brown'];
  $scope.textcolor=['green1','yellow1','orange1','pink1','purple1','brown1'];
  $scope.finish = ['green2','yellow2','orange2','pink2','purple2','brown2'];
  $scope.wait = ['green3','yellow3','orange3','pink3','purple3','brown3'];
  $scope.add=function(){
  	var length = $scope.events.length;
  	var id = (length===0)?1001:Math.max.apply('',$scope.events.map(function(v,k){
         return v.id;
  	}))+1;
  	var events = {
  		name:'新事项 '+(length+1),
  		id:id,
  		theme:$scope.colors[length%6],
  		text:$scope.textcolor[length%6],
      finish:$scope.finish[length%6],
      wait:$scope.wait[length%6], 		
      xintiaomu:[],
  	}
  	$scope.currentEvent = events;
  	$scope.events.push(events);
    $scope.saveData();
  }
  $scope.current=function(index){
       $scope.currentEvent = $scope.events[index];
   }

   $scope.xintiaomu=function(){
    var length = $scope.currentEvent.xintiaomu.length;
    var id = (length===0)?10001:Math.max.apply('', $scope.currentEvent.xintiaomu.map(function(v,k){
         return v.id;
    }))+1;
    var xintiaomu = {
         name:'条目 '+length,
         id:id,
         status:false,
      };
     $scope.currentEvent.xintiaomu.push(xintiaomu); 
     $scope.saveData();
   }
   $scope.del = function(){
    $scope.events.map(function(v,k){
       return v!=$scope.currentEvent;
    })
    $scope.saveData();
   }
}])

