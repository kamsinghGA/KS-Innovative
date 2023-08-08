import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './HomePage.css'

export default function HomePage() {
    return (
        <main>
            <div className='left-side'>
                <h1>The Best Google Ads <br /> Agency In The Worlds</h1>
                <p>(With the data to prove it)</p>
                <ul className='buyingPoints' style={{ listStyleType: 'none' }}>
                    <li className='buyingPoints'>Google Premier Partners</li>
                    <li className='buyingPoints'>Creators of the One-to-One Method</li>
                    <li className='buyingPoints'>Top Rated Conversion Rate</li>
                </ul>
                <Link to='/services'>
                    <button>Find Out More!</button>
                </Link>
            </div>
            <div className='right-side'>
                
            </div>
        </main>
    )
}