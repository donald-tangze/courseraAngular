(function(){


angular.module("ShoppingListCheckOff", [])
.controller("ToBuyController", ToBuyController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope', "ShoppingListCheckOffService"];
function ToBuyController($scope,ShoppingListCheckOffService){

  this.toBuyItemList = ShoppingListCheckOffService.getToBuyItems();

  this.buyItem = function (index) {
    ShoppingListCheckOffService.addItem(index);
    ShoppingListCheckOffService.removeItem(index);
  }
}

AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService){
  this.boughtItemList = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
  var toBuyItemList=[{ name: "pancake", quantity: "10 pieces" },{ name: "cocacola", quantity: "4 bottles" },
                    { name: "banana", quantity: "10 kiloes" },{ name: "avocado", quantity: "4 kiloes" },
                    { name: "blueberry", quantity: "7 kiloes" },{ name: "apple", quantity: "6 kiloes" },
                    { name: "raseberry", quantity: "8 kiloes" },{ name: "pear", quantity: "4 kiloes" }];
  var boughtItemList=[];

  this.removeItem = function (index){
    toBuyItemList.splice(index,1);
  }

  this.addItem = function (index){
    var item = toBuyItemList[index];
    boughtItemList.push(item);
  }

  this.getToBuyItems = function (){
    return toBuyItemList;
  }

  this.getBoughtItems = function (){
    return boughtItemList;
  }
}

})()
