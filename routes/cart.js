"use strict";
const express = require("express");
const cart = express.Router();
// const cartItems = require("../cart/cart-items";

const cartItems = [
  {
    id: 0,
    product: "Shirt",
    price: 20,
    quantity: 2
  },
  {
    id: 1,
    product: "Pants",
    price: 25,
    quantity: 1
  },
  {
    id: 2,
    product: "Hoodie",
    price: 15,
    quantity: 3
  },
  {
    id: 3,
    product: "Chinos",
    price: 40,
    quantity: 1
  },
  {
    id: 4,
    product: "T-Shirt",
    price: 20,
    quantity: 2
  },
]

let idCount = cartItems.length;

cart.get("/shop/cart-items", (request, reponse) => {
  console.log(`GET request made.`)
  reponse.send(cartItems);
})
cart.post("/shop/cart-items", (request, response) => {
  cartItems.push({
    id: idCount++,
    product: request.body.product,
    price: request.body.price,
    quantity: request.body.quantity
  });
  response.send(cartItems);
})

module.exports = cart;