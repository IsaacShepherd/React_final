import Instagram_icon from "../assets/Instagram_icon";
import Whatsap_icon from "../assets/Whatsap_icon";
import "./components-styles/Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <h2>Contact</h2>
        <div className="info-container">
          <div className="info-card">
            <p>Phone</p>
            <h3>+7 (499) 350-66-04</h3>
          </div>
          <div className="info-card">
            <p>Socials</p>
            <div className="socials-container">
              <Instagram_icon />
              <Whatsap_icon />
            </div>
          </div>
          <div className="info-card">
            <p>Addres</p>
            <h3>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h3>
          </div>
          <div className="info-card">
            <p>Working Hours</p>
            <h3>24 hours a day</h3>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1589.2801120127756!2d37.630015039309995!3d55.713646090660426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b22a91ac945%3A0xf19f72681321ff46!2sIThub%20college!5e0!3m2!1sru!2sru!4v1707038910089!5m2!1sru!2sru"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </section>
  );
}
