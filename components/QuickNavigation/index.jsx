import { Link } from 'react-router-dom'
import { Button } from '../Button/Index'
import'./index.css'
const QuickNav=()=>{
    return<>
    <section className="navbody fade">
    <div className="nav-card" style={{
    backgroundImage:`url('../../../images/taxi.jpg')`}}>
<div className='card-content'>
    <h1>CAR HIRING</h1>
    <hr/>
    <Link to={'/booking'}>
    <Button text='Car hiring' type='button' class='btn'/>
    </Link>
   
</div>
</div>
<div className="nav-card fade" style={{
    backgroundImage:`url('../../../images/taxi 4 seater.jpg')`}}>
<div className='card-content'>
    <h1>CAR BOOKING</h1>
    <hr/>
    <Link to={'/travelling'}>
    <Button text='Car BOOKING' type='button' class='btn'/>
    </Link>
  
</div>
</div>
    </section>
   </>
}
export{QuickNav}