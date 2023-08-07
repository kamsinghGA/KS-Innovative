import React from 'react';
import './ServicesSection.css'; // Import your CSS for styling

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="service">
        <div className="service-icon">
          <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="Google Ads Icon" />
        </div>
        <h3>Google Ads</h3>
        <p>Reach your target audience through Google Ads campaigns that drive traffic, leads, and conversions.</p>
      </div>
      <div className="service">
        <div className="service-icon">
          <img src="https://en.ryte.com/wiki/img_auth.php/2/20/FacebookAd.png" alt="Facebook Ads Icon" />
        </div>
        <h3>Facebook Ads</h3>
        <p>Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
      </div>
      <div className="service">
        <div className="service-icon">
          <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Instagram Ads Icon" />
        </div>
        <h3>Instagram Ads</h3>
        <p>Utilize Instagram's visual platform to showcase your products or services and engage with your audience.</p>
      </div>
    </section>
  );
}
