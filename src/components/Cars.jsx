import image1 from '../images/Nissan.png';
import image2 from '../images/Sabaru.png';
import image3 from '../images/Suzuki.png';
import image4 from '../images/Toyota.png';
import image5 from '../images/Vector.png';
import image6 from '../images/Volvo.png';
import image7 from '../images/Benz.png';
import image8 from '../images/BMW.png';

const Cars = () => {
  return (
    <div className='container-fluid car row'>
      <div className='container small-image  col-3'>
<img src={image1}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image2}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image3}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image4}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image5}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image6}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image6}/>
      </div>

      <div className='container small-image col-3'>
      <img src={image8}/>
      </div>


    </div>
  )
}

export default Cars
