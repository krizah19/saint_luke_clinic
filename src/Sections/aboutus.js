import abouti1 from '../Assets/pic-1.ad1ed7ee.PNG';
import abouti2 from '../Assets/pic-2.0593bc2f.PNG';
import abouti3 from '../Assets/pic-3.fa689b10.PNG';
import { FaAmbulance , FaBed , FaSyringe } from "react-icons/fa";
import { IoWater } from "react-icons/io5";


function AboutUs(){

  return <div>
    <section className="section about-area">
       <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-30">
            <div className="about-images">
              <ul>
                <li>
                  <img className='img1' src={abouti1}/>
                </li>
                <li>
                  <img className='img2' src={abouti2}/>
                </li>
                <li>
                  <img className='img3' src={abouti3}/>
                </li>
                <li>
                  <div className='exp-bx'>
                    15
                    <span>Years of Experience</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 mb-30'>
            <div className='heading-bx'>
              <h6>About Us</h6>
              <h2 className='title'>The Great Medical Clinic in Nakuru</h2>
              <p>We provide the special care services and 
                health care treatment with the latest
                 technology in our hospital.</p>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaAmbulance/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Emergency Help</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaBed/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Qualified Doctors</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <IoWater/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Medical Consultation</h4>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-sm-6 mb-30'>
                <div className='feature1'>
                  <div className='icon-md'>
                    <span className='icon-cell'>
                      <FaSyringe/>
                    </span>
                  </div>
                  <div className='icon-content'>
                      <h4>Medical Treatment</h4>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       </div>
    </section>
  </div>
}

export default AboutUs;