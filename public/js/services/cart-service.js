"use strict";

function CartService($http) {
  const vm = this;

  vm.getAllItems = () => {
    return $http({
      method: "GET",
      url: "/shop/cart-items"
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
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
      return vm.cart;
    });
  }

  vm.deleteItem = (id) => {
    return $http({
      method: "DELETE",
      url: `/shop/cart-items/${id}`
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  }

  vm.updateItem = (id) => {
    return $http({
      method: "PUT",
      url: `/shop/cart-items/${id}`
    }).then((response) => {
      vm.cart = response.data;
      console.log(vm.cart);
      return vm.cart;
    });
  }
}

angular
  .module("app")
  .service("CartService", CartService);