
import headerImage from '../Assets/doctor.7c2bc96d.jpeg';

function Banner(){

    return <div className='banner'>
       <div className="container">
        <div className="row align-items-center">
           <div className="col-lg-7 col-md-7">
             <h2 className='backimg'>We Provide Out Patient Health Care Solutions</h2>
             
             <p>If you are looking for private healthcare without the headache, 
             enjoy flexible access to medical care when you need it with St. Luke Clinic.
             We make it faster, easier, and more enjoyable for you to access the healthcare services you need.
             With same-day appointments and our high-quality services, you can now access flexible healthcare that works with your lifestyle.
            Contact us to find out how you can enjoy unlimited access to quality medical services:</p>
              
                        <p>-Laboratory investigations</p>

                        <p>-Antenatal clinic</p>
                        
                        <p>-Child welfare clinic and immunization</p>
                        
                        <p>-HIV counseling and testing</p>
                        
                        <p>-And Minor Surgical Procedures</p> 

               <h5>Protect your Health and take Care of your Health.</h5>
           </div>
           <div className="col-lg-5 col-md-5">
              <img src={headerImage}/>
           </div>
        </div>
       </div>
    </div>
}

export default Banner ;