import "./Hero.css";

function Hero({ title, subtitle, ctaText = "Shop the collection" }) {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow"><span className="eyebrow-dot" /> THE NEXT LEVEL OF EVERYDAY TECH</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a className="hero-button" href="#products">{ctaText}<span>↗</span></a>
        <div className="hero-note"><span className="hero-note-line" /> Carefully picked. Ready for your setup.</div>
      </div>
      <div className="hero-art" role="img" aria-label="Modern headphones and smart technology on a desk">
        <div className="hero-image-glow" />
        <img
          src="https://images.unsplash.com/photo-1505725513369-3f1f4a8f1c9b?auto=format&fit=crop&w=1100&q=85"
          alt="Modern headphones on a desk"
        />
        <div className="floating-label"><span>01 / FEATURED</span><strong>Make room for better tech.</strong></div>
      </div>
      <div className="hero-index">01 <span>—</span> 03</div>
    </section>
  );
}

export default Hero;
