import "./Footer.css";

function Footer({ storeName = "VoltVault", email = "support@voltvault.store" }) {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand-block" id="about">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">V</span>
            <span>{storeName}<span className="brand-period">.</span></span>
          </a>
          <p>Good gear. Better everyday.</p>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <a href="#home">Home</a>
          <a href="#products">Shop products</a>
          <a href="#about">Our story</a>
        </div>
        <div className="footer-column">
          <h4>Get in touch</h4>
          <a href={`mailto:${email}`}>{email}</a>
          <span>Monday – Friday</span>
          <span>9:00 AM – 5:00 PM</span>
        </div>
        <div className="footer-signoff">
          <span>STAY IN THE LOOP</span>
          <p>Fresh finds for your setup, without the noise.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {storeName}. All rights reserved.</span>
        <span>Built for the curious.</span>
      </div>
    </footer>
  );
}

export default Footer;
