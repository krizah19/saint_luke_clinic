import logo from '../Assets/download.png';
import { FaPhoneAlt , FaFacebookF , FaTwitter , FaInstagram , FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer(){

    return <div>
        <footer className="footer">
          <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6">
                        <div className="widget widget-info">
                            <div className="footer-logo">
                               <Link to={'/'}>
                                <img src={logo} alt=""/>
                               </Link>
                            </div>
                            <div className='ft-contact'>
                                <p>St. Luke Clinic Private
                                <p>Out-patient Clinic</p>  
                                   Located in YMCA Estate Nakuru</p>
                                   <div className='contact-bx'>
                                    <div className='icon'>
                                        <FaPhoneAlt/>
                                    </div>
                                    <div className='contact-number'>
                                        <span>Contact Us</span>
                                        <h4 className='number'>+254 726 485344</h4>
                                    </div>
                                   </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-2 col-lg-3 col-4'>
                        
                    </div>
                    <div className='col-xl-3 col-lg-3 col-6'>
                        <div className='widget footer-widget ml-50'>
                            <h3 className='footer-title'>Our Service</h3>
                            <ul>
                                <li>
                                    <Link to={'/home'}>
                                        <span>Laboratory</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/home'}>
                                        <span>Antenatal Clinic</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/home'}>
                                        <span>Child welfare clinic</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/home'}>
                                        <span>Vaccination</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/home'}>
                                        <span>HIV Testing and Diagnosis </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/home'}>
                                        <span>Minor Surgery Services</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6'>
                        <div className='widget widget-form'>
                            <h3 className='footer-title'>Subscribe</h3>
                            <form className='subscribe-form subscription-form mb-30'>
                                <div className='ajax-message'></div>
                                <div className='input-group'>
                                    <input name='email' required className='form-control' placeholder='Email Address' type='email'></input>
                                </div>
                                <button name='submit' value='Submit' type='submit' className='btn btn-secondary shadow w-100'>Subscribe Now</button>
                            </form>
                            <div className='footer-social-link'>
                                <ul>
                                    <li>
                                        <Link to={'facebook.com'}>
                                          <FaFacebookF/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'twitter.com'}>
                                          <FaTwitter/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'instagram.com'}>
                                          <FaInstagram/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'linkedin.com'}>
                                          <FaLinkedin/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className='container'>
            <div className='footer-bottom'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <p className='copyright-text'>
                           Copyright © 2022 Design & Developed by 
                           <Link to={'/home'} className='text-secondary'>Chrisoft Inc.</Link>
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </footer>
    </div>
}

export default Footer;