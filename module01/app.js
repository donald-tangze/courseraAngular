(function () {

'use strict';

angular.module('lunchcheck', [])
.controller('MyFirstController', MyFirstController)
.filter('mySplit', MySplit);

//这句话是为了minification时把非文本的变量简化名称   方法1：inlane array as last element 方法2：Attach $inject to the function obeject
MyFirstController.$inject = ['$scope', 'mySplitFilter'];

function MyFirstController($scope, mySplitFilter){
 $scope.checkNum = function(){
   if($scope.menu == null || $scope.menu.trim() ==""){
     $scope.message="Please enter data first";
   }
   //var num =  mySplitFilter($scope.menu);
   var num = $scope.menu.split(",");

   if(num.length < 1){
     $scope.message="Please enter data first";
   }else if (num.length <=3) {
     $scope.message="Enjoy!";
   }else if (num.length > 3) {
     $scope.message="Too much!";
   }
 };
}

function MySplit() {
  return function(input) {
    var out = input.split(",");
    return out;
  };
}

// var num = $scope.menu.split(',')
//                    .filter(function (dish) {
//                   return dish.trim().length > 0;
//               }).length;

})();
