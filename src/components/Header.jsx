import Nav from '../components/Nav'

const Header = () => {
  return (
    <div className=' container-fluid header'>
      <Nav/>
      <div className='header-content'>
      <h1>Rent A Car & <br/>
Travel <span className='colored'>Endless</span></h1>
<p>No reservation costs. Great rates.<br/>
Find What You Need actually.</p>
<button className='btn'>Contact us</button>
<button className='btn'>Book now</button>
      </div>

<div className='small-container row'>
<div className='col-3 small'>Choose a location</div>
<div className='col-3 small'>Pickup Date</div>
<div className='col-3 small'>Return Date</div>
<div className='col-3'><button className='btn'>Submit</button></div>
</div>

    </div>
  )
}

export default Header
