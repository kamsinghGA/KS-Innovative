import { Link } from 'react-router-dom';
import './ServicesPage.css';

export default function ServicesPage() {
    return (
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <Link to="/google-ads" className="service card">
                        <div className="card-body">
                        <div className="service-icon">
                            <img src="https://static-00.iconduck.com/assets.00/google-ads-icon-2048x1837-4vbvpswm.png" alt="Google Ads Icon" />
                        </div>
                        <h3 className="card-title">Google Ads</h3>
                        <p className="card-text" style={{textDecoration: 'none'}}>Reach your target audience through Google Ads campaigns that drive traffic, leads, and conversions.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/facebook-ads" className="service card">
                        <div className="card-body">
                        <div className="service-icon">
                            <img src="https://en.ryte.com/wiki/img_auth.php/2/20/FacebookAd.png" alt="Facebook Ads Icon" />
                        </div>
                        <h3 className="card-title">Facebook Ads</h3>
                        <p className="card-text" style={{textDecoration: 'none'}}>Connect with potential customers on Facebook through strategic ad campaigns and audience targeting.</p>
                        </div>
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <Link to="/instagram-ads" className="service card">
                        <div className="card-body">
                        <div className="service-icon">
                            <img src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg" alt="Instagram Ads Icon" />
                        </div>
                        <h3 className="card-title">Instagram Ads</h3>
                        <p className="card-text" style={{textDecoration: 'none'}}>Utilize Instagram's visual platform to showcase your products or services and engage with your audience.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
  );
}