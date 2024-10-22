import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './css/Maintenance.css'; // Import CSS

const MaintenancePage = () => {
  return (
    <div className="maintenance-wrapper d-flex justify-content-center align-items-center">
      <section className="maintenance-container text-center">
        <h2 className="maintenance-title">We&rsquo;ll be back soon!</h2>
        <div className="maintenance-content">
          <p className="maintenance-message">
            Sorry for the inconvenience, but we&rsquo;re performing some maintenance at the moment.
            If you need to, you can always{' '}
            <Link to="/contact" className="maintenance-contact-link">
              contact us
            </Link>
            . Otherwise, we&rsquo;ll be back online shortly!
          </p>
          <p className="maintenance-signature">&mdash; The Team</p>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
