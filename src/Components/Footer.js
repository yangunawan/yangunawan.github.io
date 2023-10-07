import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/USYD_LOGO_WHITE.png';



const Footer = () => {
  return (
    <footer className="nearlyEnd pt-4 pb-4 bg-dark">
      <div className='container'>
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link className='text-white' to="/pharmacokinetics">Home</Link></li>
              <li><Link className='text-white' to= "/about">About</Link></li>
              <li><Link className='text-white' to="/contact">Contact</Link></li>

              <li><Link to = "https://github.com/sladem-tox" className='text-white'> Dr. Slade Matthews's Github</Link></li>

            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">About the Author</h5>
            <Link to = "https://www.sydney.edu.au/medicine-health/about/our-people/academic-staff/slade-matthews.html#collapseprofileprojects"className='text-white'>More About Dr. Slade Matthews</Link>

          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact & Support</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="mailto:cs.reception@sydney.edu.au" class="text-white">Email Address</a></li>
              <li><a href="tel:+61 2 9351 2222" class="text-white">Phone</a></li>

            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to = "https://www.sydney.edu.au/privacy-statement.html" className='text-white'>Privacy Policy</Link></li>
              <li><Link to = "https://postgradonline.sydney.edu.au/legal/terms-of-service/"className='text-white'>Terms Of Use</Link></li>
              <li><Link className='text-white' to={'/disclaimer'}>Disclaimer</Link></li>
            </ul>
          </div>

        </div>
        <div className="text-center mb-0 pb-0">
          <img src={logo} alt="USYD Logo" width="150" />
          <p>In Collaboration with the University of Sydney</p>
          <p className='mb-0'>Copyright © 2023 PK_Calcs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer