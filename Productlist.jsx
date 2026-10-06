import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

function ProductList({ onCartClick }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantCategories = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?auto=format&fit=crop&w=400&q=80", description: "Hardy, low-light tolerant, and a top-rated air purifier.", price: 18.99 },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?auto=format&fit=crop&w=400&q=80", description: "Elegant white blooms with excellent air-cleaning ability.", price: 22.5 },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80", description: 'Easy-care plant that produces charming little "babies".', price: 14.75 },
      ],
    },
    {
      category: "Succulents",
      plants: [
        { name: "Echeveria", image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=400&q=80", description: "Rosette-shaped succulent, perfect for sunny windowsills.", price: 12.0 },
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=400&q=80", description: "A symbol of good luck with thick, glossy leaves.", price: 16.25 },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?auto=format&fit=crop&w=400&q=80", description: "Soothing gel-filled leaves, easy to grow indoors.", price: 13.5 },
      ],
    },
    {
      category: "Flowering Plants",
      plants: [
        { name: "Orchid", image: "https://images.unsplash.com/photo-1524598171353-e2d4256d0ae8?auto=format&fit=crop&w=400&q=80", description: "Exotic, long-lasting blooms for a touch of elegance.", price: 28.0 },
        { name: "African Violet", image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=400&q=80", description: "Compact plant with vibrant purple flowers year-round.", price: 15.99 },
        { name: "Anthurium", image: "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&w=400&q=80", description: "Glossy heart-shaped leaves with striking red spathes.", price: 24.99 },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="product-list-page">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Paradise Nursery</span>
        </div>
        <div className="cart-icon" onClick={onCartClick}>
          🛒 <span className="cart-count">{totalQuantity}</span>
        </div>
      </header>

      <div className="product-header">
        <h2>Our Plant Collection</h2>
        <p>
          Browse our hand-picked selection of air-purifying, low-maintenance
          houseplants.
        </p>
      </div>

      {plantCategories.map((category) => (
        <div className="category-block" key={category.category}>
          <h3>{category.category}</h3>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <div className="plant-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} />
                <div className="plant-card-info">
                  <h4>{plant.name}</h4>
                  <p className="desc">{plant.description}</p>
                  <p className="price">${plant.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
