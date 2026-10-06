import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

function CartItem({ onContinueShopping, onCheckout }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate subtotal for a single item
  const calculateTotalCost = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  // Calculate total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate total number of items in the cart
  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({ name: item.name, quantity: item.quantity + 1 })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) onContinueShopping();
  };

  const handleCheckout = () => {
    alert("Thank you for your order! This is a demo checkout — no payment was processed.");
    if (onCheckout) onCheckout();
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart-msg">
            Your cart is empty. Head back to the shop to add some green
            friends! 🌱
          </p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p className="unit-price">${item.price.toFixed(2)} each</p>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </button>
              </div>
              <div className="qty-controls">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrement(item)}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrement(item)}
