import { Link } from 'react-router-dom'
import { Button } from '../Button/Index'
import { Footer } from '../footer/Footer'
import { Header } from '../Header/Header'
import './index.css'

const TravellingPage=()=>{

    return<main style={{
textAlign:'center',
    }} className='hire-page fade'>
        <Header/>
    <h1> Travells Page Under Development</h1>
<p>developing...</p>
   <Link to={'/'}>
   <Button text='Back' type='button' />
   </Link>
    <Footer/>
    </main>
}
export default TravellingPage