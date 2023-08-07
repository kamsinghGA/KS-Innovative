import React from 'react';
import './ServicesSection.css'; // Import your CSS for styling

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="service">
        <div className="service-icon">
          <img src="google-ads-icon.png" alt="Google Ads Icon" />
        </div>
        <h3>Google Ads</h3>
        <p>Reach your target audience through Google Ads campaigns that drive traffic, leads, and conversions.</p>
      </div>
      <div className="service">
        <div className="service-icon">
          <img src="facebook-ads-icon.png" alt="Facebook Ads Icon" />
        </div>
        <h3>Facebook Ads</h3>
        <p>Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
      </div>
      <div className="service">
        <div className="service-icon">
          <img src="instagram-ads-icon.png" alt="Instagram Ads Icon" />
        </div>
        <h3>Instagram Ads</h3>
        <p>Utilize Instagram's visual platform to showcase your products or services and engage with your audience.</p>
      </div>
    </section>
  );
}
