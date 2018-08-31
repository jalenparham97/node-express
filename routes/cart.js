"use strict";
const express = require("express");
const cart = express.Router();
const pool = require("../connection");

cart.get("/shop/cart-items", (request, response) => {
  pool.query("Select * From shoppingcart").then((results) => {
    console.log(results.rows);
    response.send(results.rows);
  });
});

cart.post("/shop/cart-items", (request, response) => {
  pool.query("Insert Into shoppingcart(product, price, quantity) values($1::text, $2::int, $3::int)", [request.body.product, request.body.price, request.body.quantity]).then((results) => {
    console.log("POST request made.");
    console.log(results.rows);
    response.send(results.rows);
  }).catch((err) => {
    console.log(err);
  });
});

cart.delete("/shop/cart-items/:id", (request, response) => {
  pool.query("Delete From shoppingcart Where id=$1::int", [parseInt(request.params.id)]).then((results) => {
    console.log(results.rows);
    response.send(results.rows)
  }).catch((err) => {
    console.log(err);
  });
});

cart.put("/shop/cart-items/:id", (request, response) => {
  pool.query("Update shoppingcart Set quantity=$1::int Where id=$2::int", [request.body.quantity, request.params.id]).then((results) => {
    console.log(results.rows);
    response.send(results.rows);
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = cart;