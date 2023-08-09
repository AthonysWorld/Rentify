import image1 from '../images/Services.png'

const Rental = () => {
  return (
    <div className='Rental'>
     <span className='colored'> <h6>WHY CHOOSE US</h6></span>
      <h3>Best Car Rental Services</h3>
      <p>We provide Best classic  services as below</p>

      <div className='container-fluid row'>
<div className='container  col-lg-6'>
<img className='imageContainer' src={image1}/>
</div>

<div className='container leftContainer col-lg-6'>
<h6>24/7 Customer Support</h6>
<p>We keep our valued customers happy and<br/> provide 24/7 customer support</p>
<h6>Best Price Guarantee</h6>
<p>We are committed for the best prices and ensure you for it</p>
<h6>All locations in Tanzania</h6>
<p>We provide our services at each and every<br/> place all over Southern Nigeria</p>
    
</div>

      </div>
    </div>
  )
}

export default Rental
