import memback from '../Assets/download666.png';
import member1 from '../Assets/doc11.PNG';
import member2 from '../Assets/doc22.PNG';
import member3 from '../Assets/doc33.PNG';
import member4 from '../Assets/doc44.PNG';
import member5 from '../Assets/doc55.jpeg';
import member6 from '../Assets/doc66.PNG';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Testimonial(){
    return <div>
      <section className="section-area section-sp3 testimonial-wraper">
         <div className="container">
            <div className="heading-bx text-center">
                <h6 className="title-ext text-secondary">Testimonial</h6>
                <h2 className="title mb-0">
                   See What Are The Patients
                   <br/>
                   Saying About us
                </h2>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6 text-center">
                    <div className="thumb-wraper">
                        <img src={memback} className='bg-img' alt=''/>
                        <ul>
                          <li data-member="1">
                            <a href='/'>
                                <img src={member1} alt=''/>
                            </a>
                          </li>
                          <li data-member="2">
                            <a href='/'>
                                <img src={member2} alt=''/>
                            </a>
                          </li>
                          <li data-member="3">
                            <a href='/'>
                                <img src={member3} alt=''/>
                            </a>
                          </li>
                          <li data-member="4">
                            <a href='/'>
                                <img src={member4} alt=''/>
                            </a>
                          </li>
                          <li data-member="5">
                            <a href='/'>
                                <img src={member5} alt=''/>
                            </a>
                          </li>
                          <li data-member="6">
                            <a href='/'>
                                <img src={member6} alt=''/>
                            </a>
                          </li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='testimonial-bx'>
                        <div className='testimonial-content'>
                            <p>I am writing on behalf of my brother who was a patient in your hospital. 
                            I would like to thank you on behalf of my entire family for the help and 
                            consideration shown to me in what was a very difficult time.
                            Again, I would like to thank you for the services you provide to patients and their families.
                            </p>
                        </div>
                        <div className='client-info'>
                            <h5 className='name'>Elvis Nderitu</h5>
                            <p>Patient</p>
                        </div>
                        <div className='quote-icon'>
                            <FaQuoteLeft/>
                        </div>
                        <div className='quote-icon2'>
                            <FaQuoteRight/>
                        </div>

                    </div>
                </div>
            </div>
         </div>
      </section>
    </div>
}

export default Testimonial;