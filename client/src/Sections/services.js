import { FaAmbulance , FaSyringe , FaStethoscope , FaBriefcaseMedical  } from "react-icons/fa";
import { TbMedicineSyrup } from "react-icons/tb";

import Slider from "react-slick";

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            infinite: true
            }
        }, {
            breakpoint: 600,

            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
              dots: false
            }
          }, {
            breakpoint: 300,
        
            settings: "unslick",
          }]
        
};


function Services(){

    return <div>
        <section className='section-area section-sp1 service-wraper'>
            <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-xl-4 col-lg-7 mb-30 bhover'>
                <div className='heading-bx'>
                    <h6 className='title-ext'>Services</h6>
                    <h2 className='title'>We Offer A Big Variety Of Medical Services</h2>
                    <p>We provide Consulatations and Healthcare Treatment at a high level best.</p>
                </div>
               
            </div>
            <Slider className='col-xl-8 col-md-12 mb-15' {...settings}>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaBriefcaseMedical/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Surgery</h3>
                        <p>Get in touch with us for Minor Surgical Procedures and Services.</p>
                        
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaSyringe/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Vaccine</h3>
                        <p>Get in touch with us for Child welfare clinic and immunization Services</p>
                        
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaAmbulance/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Emergency</h3>
                        <p>Reach out to us for access to the Antenatal clinic.</p>
                        
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <FaStethoscope/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Diagnostics</h3>
                        <p>Visit us for Laboratory tests and investigations Services.</p>
                        
                    </div>
                </div>
                <div className='feature-container feature-bx2 feature2'>
                    <div className='feature-box-xl mb-30'>
                        <span className='icon-cell'>
                           <TbMedicineSyrup/>
                        </span>
                    </div>

                    <div className='icon-content'>
                        <h3 className='ttr-title'>Treatment</h3>
                        <p>Get in touch with us for HIV counseling, testing, and any Medical Consultation and Treatment Services.</p>
                        
                    </div>
                </div>
            </Slider>
          </div>
          </div>
        </section>
    </div>
}

export default Services;