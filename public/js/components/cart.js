"use strict";

const cart = {
  templateUrl: `/js/components/cart.html`,

  controller: ["CartService", function(CartService) {
    const vm = this;
    CartService.getAllItems().then(() => {
      vm.cart = CartService.cart;
      console.log(vm.cart);
    })
    vm.addToCart = (newItem) => {
      CartService.postItem(newItem);
      CartService.getAllItems().then(() => {
        vm.cart = CartService.cart;
        console.log(vm.cart);
      })
    }
  }]

}

angular
  .module("app")
  .component("cart", cart);