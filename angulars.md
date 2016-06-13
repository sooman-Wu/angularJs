bower install angular
                     -route
                     -animate
                     -touch


<html lang="en" ng-app="stuManger">
<body ng-controller="mainCtrl">指令</body>
<input type="text" ng-model="info">
<p>{{info}}</p>
<h2>{{num}}</h2>
<button ng-click="changeNum()"></button>

<script>
	var xxx = angular.module('stuManager',[]);   module函数

	xxx.controller('mainCtrl',['$scope',function($scope){
		console.log($scope);
		$scope.num=Math.random();
		$scope.changeNum=function(){
			this.num=Math.random();
		}
	}])
</script>

ng-app        指令

ng-controller     $scope范围

ng-model           属性  给$scope添加属性


ng-repeat

ng-class    ng-class="{red:$first,blue:$middle,pink:$last}"

ng-if

ng-hide

ng-show



ng-click

ng-dblclick

ng-mousedown

ng-mouseup

ng-mouseenter

ng-mouseleave

ng-change



模块

控制器

作用域

表达式  (ng开头的指令) 不能使用if 和for循环   只能用赋值 运算一类的简单运算


{{v}}  相当于 ng-blid="v"







## anjular.js

一个全局对象  anjular

``` javascript

{
	fromJson:fn,
	toJson:fn,
	forEach:fn,
	module:fn(str,array)
}
  
一个模块对象的内部结构

{
	controller:fn,
	directive:fn,
	config:fn,

	factory:fn,
	service:fn,
	constant:fn,
	value:fn,

	filter:fn,
}

$scope, $location,$routeProvider,$routePramas

```

## 基本使用

html na-app="nw"

body ng-controller="mainCtrl"

var nw = anjular.module('nw',[]);

nw.controller("manCtrl",["$scope",function($scope){
	
}])

## 模块

<script src="anjular-animate.js"></script>

他就是一个模块

var nw = anjular.module('nw',["ngAnimate"])

## 控制器

nw.controller('mainCtrl',["$scope",function($scope){
	$scope.state = true;
}])

> 双向数据绑定  {{state}}
> 作用域 (controller开始和结束标签之间)


## 装饰性指令

> 在页面的装饰性指令中可以使用anjular表达式

ng-repeat   指令优先级最高 1000    ng-repeat="v in list"  $index  $last  $first  $middle  $odd $even

ng-bind == {{}}

ng-class="{a:ex,b:ex,c:ex}"   ...ex 表达式

ng-if

ng-show

ng-hide


ng-click

ng-dblclick

ng-[event]

## 组件化开发

> anjular会以ajax请求的方式去调用

> 我们写的html页面

nw.directive('uqTab',[function(){
	return{
      restrict:'AEC',
      template:'<div></div>',
      replace:true,
      templateUrl:"views/tab.html",
      link:function($scope,em){

     }
  }
}]);

<uq-tab></uq-tab>    ===> views/x.html

在x.html中只能用一个div吧所有元素包起来

## 在指令中使用jQuery

anjular每部提供了一个jqLite

anjular.elements() === $();

在指令的link函数中不想使用jqLite先引入jquery 再引入anjular   anjular会自动把jqLite替换为jquery   在指令的link函数中去添加事件 操作DOM


## 使用路由

访问的永远是index.html   只是替换中间部分
index.html/#/weixin
<uq-tab></uq-tab>
<ng-view></ng-view>
<uq-foot></uq-foot>

<script src="anjular-route.js"></script>
var nw = anjular.module('nw',["ngRoute"])
nw.config(['$routeProvider',function(){
	$routeProvider.when('/weixin',{
	controller:'weixinCtrl',
	templateUrl:'views/weixin.html',
})
}])

## 使用动画

<script src="anjular-animate.js"></script>
var nw = anjular.module('nw',["ngAnimate"])
ng-if   .ng-hide

div{
	transition:all 0.5s ease;
}
div.ng-hide{
	opacity:0;
}

ng-class  .add  .remove

ng-repeat  .enter  .enter-active

           .leave  .leave-active

ng-view    .enter   .enter-active

           .leave    .leave-active



## 使用内置服务

把服务依赖注入到 控制器、指令、服务、过滤器中

$scop    $routeProvider   $location


nw.controller('mainCtrl',["$scope",'$routeParams',function($scope,$routeParams){
	var id = $routeParams.aaa;
	var list=chatlist[id].
}])

定义服务
test.factory("$x",[function(){
  var chatList=[];
	var x = {
	getAllChat:function(){
     return chatList;
}
}
   return x;
}])
