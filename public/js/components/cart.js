"use strict";

const cart = {
  templateUrl: `/js/components/cart.html`,

  controller: ["CartService", function(CartService) {
    const vm = this;
    vm.update = false;

    vm.editQuantity = (id) => {
      vm.update = true;
      console.log(id);
    }

    CartService.getAllItems().then(() => {
      vm.cart = CartService.cart;
      console.log(vm.cart);
    });

    vm.addToCart = (newItem) => {
      CartService.postItem(newItem).then(() => {
        CartService.getAllItems().then(() => {
          vm.cart = CartService.cart;
          console.log(vm.cart);
        });
      });
    }

    vm.deleteFromCart = (id) => {
      CartService.deleteItem(id).then(() => {
        CartService.getAllItems().then(() => {
          vm.cart = CartService.cart;
          console.log(vm.cart);
        });  
      });
    }

    vm.updateItemQuantity = (id, quantity) => {
      vm.update = false;
      CartService.updateItem(id, quantity).then(() => {
        CartService.getAllItems().then(() => {
          vm.cart = CartService.cart;
          console.log(vm.cart);
        });
      });
    }
  }]
}

angular
  .module("app")
  .component("cart", cart);