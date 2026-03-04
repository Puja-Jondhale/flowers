import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Create Beautiful Spaces That Inspire</h1>
          <p>
            Discover modern furniture and decor designed to elevate your home.
            Quality craftsmanship meets timeless elegance.
          </p>
          <button className="btn-primary">Subscribe & Create</button>
        </div>
        <div className="hero-image">
          <img src="/images/lady.jpg" alt="Person standing" />
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="feature-section">
        <div className="feature-text">
          <h2>Elegant Designs For Every Room</h2>
          <p>
            Discover premium materials and carefully curated pieces crafted
            for modern living.
          </p>
          <button className="btn-outline">Take Trip</button>
          <a href="#categories" className="link-secondary">Categories</a>
        </div>
        <div className="feature-image">
          <img src="/images/chair.jpg" alt="Modern chair" />
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="feature-section reverse">
        <div className="feature-image">
          <img src="/images/vase.jpg" alt="Vases setup" />
        </div>
        <div className="feature-text">
          <h2>Premium Home Accessories</h2>
          <p>
            Enhance your space with handcrafted decor and exclusive designs
            that stand out.
          </p>
          <button className="btn-outline">Intro Settings</button>
          <a href="#rating" className="link-secondary">Rating</a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <p>
          Explore exclusive collections and transform your home today.
        </p>
        <button className="btn-primary">Explore Exclusive</button>
      </section>

    </div>
  );
};

export default Home;