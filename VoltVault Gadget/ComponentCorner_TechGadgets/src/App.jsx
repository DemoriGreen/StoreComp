import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

const products = [
  {
    name: "Studio Wireless Headphones",
    price: "$129.00",
    description: "Comfortable over-ear design with immersive sound for work, travel, and downtime.",
    image: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?auto=format&fit=crop&w=900&q=85",
    badge: "BEST SELLER",
  },
  {
    name: "Pulse Smart Watch",
    price: "$89.00",
    description: "A versatile everyday companion for activity tracking, alerts, and quick check-ins.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    badge: "NEW ARRIVAL",
  },
  {
    name: "Orbit Bluetooth Speaker",
    price: "$59.00",
    description: "Room-filling audio in a compact speaker made for your desk or weekend plans.",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    badge: "STAFF PICK",
  },
];

function App() {
  return (
    <div className="app-shell">
      <Header storeName="VoltVault" />
      <main>
        <Hero
          title={<>Find your next<br />favorite gadget.</>}
          subtitle="Thoughtful tech for your everyday setup. Discover useful gear, clean designs, and little upgrades that make a big difference."
          ctaText="Shop the collection"
        />
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="section-kicker">THE GOOD STUFF</span>
              <h2>Popular right now<span>.</span></h2>
            </div>
            <p>Three smart picks to upgrade your everyday.</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
        <section className="closing-strip">
          <span className="closing-icon">✳</span>
          <p>Less scrolling. Better gear. <strong>That's the VoltVault way.</strong></p>
          <a href="#products">Find your upgrade ↗</a>
        </section>
      </main>
      <Footer storeName="VoltVault" email="support@voltvault.store" />
    </div>
  );
}

export default App;
