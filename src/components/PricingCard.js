import "./PricingCardStyle.css";

import React from 'react';
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
        <div className="card">
            <h3>- Basic -</h3>
            <span className="bar"></span>
            <p className="btc">Rp 700.000</p>
            <p>- 3 Hari -</p>
            <p>- 3 Halaman -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
        </div>

        <div className="card">
            <h3>- Premium -</h3>
            <span className="bar"></span>
            <p className="btc">Rp 1.400.000</p>
            <p>- 2 Hari -</p>
            <p>- 5 Halaman -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
        </div>

        <div className="card">
            <h3>- Business -</h3>
            <span className="bar"></span>
            <p className="btc">Rp 2.000.000</p>
            <p>- 5 Hari -</p>
            <p>- 10 Halaman -</p>
            <p>- Featured -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">
                PURCHASE NOW
            </Link>
        </div>

        </div>
    </div>
  )
}

export default PricingCard