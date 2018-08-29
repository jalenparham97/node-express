"use strict";

function CartService($http) {
  const vm = this;
  vm.cart;

  vm.getAllItems = () => {
    return $http({
      method: "GET",
      url: "/shop/cart-items"
    }).then((response) => {
      vm.cart = response.data;
      console.log(response);
    })
  }

  vm.postItem = (newItem) => {
    return $http({
      method: "POST",
      url: "/shop/cart-items",
      data: newItem
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
    })
  }
}

angular
  .module("app")
  .service("CartService", CartService);