import { useState, useEffect } from "react";
import './index.css';

const productsData = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    category: "Electronics",
    rating: "⭐⭐⭐⭐",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://tse4.mm.bing.net/th?id=OIP.oAIeK5EOxaqJMPBER0naggHaIP&pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 149,
    category: "Electronics",
    rating: "⭐⭐⭐",
    description: "Track fitness and receive notifications on your wrist.",
    image: "https://tse4.mm.bing.net/th?id=OIP.xYdSdairOTMnDvpItqySzAHaJu&pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 59,
    category: "Home Appliances",
    rating: "⭐⭐⭐⭐⭐",
    description: "Brew fresh coffee anytime with ease.",
    image: "https://tse2.mm.bing.net/th?id=OIP.MPxlBsa-Au6du2Qq4js0PgHaFY&pid=Api&P=0&h=180"
  }
];

export default function ProductListing() {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    let filtered = [...productsData];

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortBy === "price") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setProducts(filtered);
  }, [search, sortBy]);

  return (
    <div className="container">
      <h1>Product Listing</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSortBy("price")}>Sort by Price</button>
        <button onClick={() => setSortBy("name")}>Sort by Name</button>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="info">
              <h2>{product.name}</h2>
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
              <p className="desc">{product.description}</p>
              <p className="rating">{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
