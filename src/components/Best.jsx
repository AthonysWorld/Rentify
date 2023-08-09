import Card1 from '../images/Card-image1.png';
import Card2 from '../images/Card-image2.png';
import Card3 from '../images/Card-image3.png';

const Best = () => {
  return (
    <div  className='best-container'>
    <span className='colored'><h6>BEST SERVICES</h6></span>
 <h1>Most Popular Car Rental Deals</h1>
 <p>Explore below our best car services experience like never before</p>

 <div className='container-fluid row best-container'>
<div className='card col-lg-4'>
<img src={Card1}/>
<h5>Toyota Corolla T-20</h5>
<span><input type='checkbox' checked/> Air Conditioned</span>
<span><input type='checkbox' checked/> Bluetooth Sound System</span>
<span><input type='checkbox' checked/> Sunroof Available</span>
<button className='btn cardBtn'>Rent now</button>
</div>

<div className='card col-lg-4'>
<img src={Card2}/>
<h5>Toyota Corolla T-20</h5>
<span><input type='checkbox' checked/> Air Conditioned</span>
<span><input type='checkbox' checked/> Bluetooth Sound System</span>
<span><input type='checkbox' checked/> Sunroof Available</span>
<button className='btn cardBtn'>Rent now</button>
   </div>


   <div className='card col-lg-4'>
   <img src={Card3}/>
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


