import ServiceData from '../SystemData/ServiceData'
import {ServiceCardEl} from '../Cards/ServiceCardEl'
import { Header } from '../Header/Header'
import { Footer } from '../footer/Footer'
import { useContext } from 'react'
import { AuthContext } from '../../src/Assets/Context'
import { Booking } from '../Booking/Booking'
import { Button } from '../Button/Index'
import { Link } from 'react-router-dom'
import React from 'react'
const BookingPage=()=>{
const{showBooking}=useContext(AuthContext)
const render=ServiceData.map(data=><ServiceCardEl key={data.id} {...data}/>)

    return<main>
        <Header/>
        <section className='services'>
        {render}
      <Link to={'/'}>
      <Button text='Back' type='button' /></Link>
        {showBooking&&<Booking/>}
        </section>
        <Footer/>
   
    </main>
}
export default BookingPage