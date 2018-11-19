(function () {

'use strict';

angular.module('lunchcheck', [])
.controller('MyFirstController', MyFirstController)
.filter('mySplit', function() {
  return function(input) {
    var out = input.split(",");
    return out;
  };
})
//.filter('mySplit', MySplit);

MyFirstController.$inject = ['$scope', 'mySplitFilter'];

function MyFirstController($scope, mySplitFilter){
  var string = "12,345,43";
 //不能通过=号传值 string = $scope.menu;

 $scope.checkNum = function(){
   var num = ($scope.menu | mySplitFilter);
   if(num.length < 1){
     $scope.message="Please enter data first";
   }else if (num.length <=3) {
     $scope.message="Enjoy!";
   }else if (true) {
     $scope.message="Too much!";
   }
 };

}

// function MySplit() {
//   return function(input) {
//     var out = input.split(",");
//     return out;
//   };
// }
// App.filter("MySplit", function(){
//     return function(text){
//         return text.split(",");
//     }
// });

})();
