(function () {

'use strict';

angular.module('lunchcheck', [])
.controller('MyFirstController', MyFirstController)
.filter('mySplit', MySplit);
//.filter('mySplit', MySplit);

MyFirstController.$inject = ['$scope', 'mySplitFilter'];

function MyFirstController($scope, mySplitFilter){
 $scope.checkNum = function(){
   var num =  mySplitFilter($scope.menu);
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
// App.filter("MySplit", function(){
//     return function(text){
//         return text.split(",");
//     }
// });

})();
