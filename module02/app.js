(function(){

angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController);

function ToBuyController($scope){
  $scope.toBuyItemList=[{ name: "cookies", quantity: 10 },{ name: "cocacola", quantity: 4 }];

  var buyItem = fucntion(){
    console.log($scope);
  }
}


function AlreadyBoughtController($scope){
  $scope.boughtItemList=[{ name: "cookies", quantity: 10 },{ name: "cocacola", quantity: 4 }];

}

})()
