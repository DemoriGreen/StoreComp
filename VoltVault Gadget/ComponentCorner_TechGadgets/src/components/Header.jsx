import "./Header.css";

function Header({ storeName = "VoltVault" }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label={`${storeName} home`}>
        <span className="brand-mark">V</span>
        <span>{storeName}<span className="brand-period">.</span></span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="header-shop-link" href="#products">Explore gear <span>↗</span></a>
    </header>
  );
}

export default Header;
