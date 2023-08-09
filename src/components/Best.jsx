
import image1 from '../images/card-image1.png'
import image2 from '../images/card-image2.png'
import image3 from '../images/card-image3.png'

const Best = () => {
  return (
    <div className='best-container'>
     <span className='colored'><h6>BEST SERVICES</h6></span>
      <h1>Most Popular Car Rental Deals</h1>
      <p>Explore below our best car services experience like never before</p>
     
     <div className='container-fluid row best-container'>
     <div className='card col-lg-4'>
     <img src={image1}/>
<h5>Toyota Corolla T-20</h5>
<span><input type='checkbox' checked/> Air Conditioned</span>
<span><input type='checkbox' checked/> Bluetooth Sound System</span>
<span><input type='checkbox' checked/> Sunroof Available</span>
<button className='btn cardBtn'>Rent now</button>
     </div>

     <div className='card col-lg-4'>
     <img src={image2}/>
<h5>Toyota Corolla T-20</h5>
<span><input type='checkbox' checked/> Air Conditioned</span>
<span><input type='checkbox' checked/> Bluetooth Sound System</span>
<span><input type='checkbox' checked/> Sunroof Available</span>
<button className='btn cardBtn'>Rent now</button>
        </div>

        <div className='card col-lg-4'>
        <img src={image3}/>
<h5>Toyota Corolla T-20</h5>
<span><input type='checkbox' checked/> Air Conditioned</span>
<span><input type='checkbox' checked/> Bluetooth Sound System</span>
<span><input type='checkbox' checked/> Sunroof Available</span>
<button className='btn cardBtn'>Rent now</button>
        </div>


     </div>
      
    </div>
  )
}

export default Best
