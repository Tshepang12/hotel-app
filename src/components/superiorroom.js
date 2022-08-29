import Carousel from 'react-bootstrap/Carousel'
import {db} from '../FireBase'
import { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import superior1 from '../images/superior1.png'
import superior2 from '../images/superior2.png'
import superior3 from '../images/superior3.png'
import Room3 from '../images/image3.png.jpg'
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';


function Superior(){

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");
  const[guests,setGuest] = useState("");
  const[checkin,setCheckin] = useState("");
  const[checkout,setCheckout] = useState("");
  const[timein,setTimein] = useState("");
  const[timeout,setTimeout] = useState("");


  const add = (() => {
    const collectionRef = collection(db, 'bookings');
  
    const bookings = {
        name:name , email:email , phone:phone , guests:guests, checkin:checkin , checkout:checkout, timein:timein ,timeout:timeout
    };
  
    addDoc(collectionRef, bookings)
    .then(() => {
        alert('Added successfully')
    })
    .catch((error) => {
        console.log(error)
    })
  })
    return(
        <div>
             <section className='about' >
             <div className="sectionTitle">Superior <span>Room</span></div>
             <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={superior1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Have a luxury experience</h3>
          <h3>R500 per night</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={superior2 }
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Have a luxury experience</h3>
          <h3>R500 per night</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={superior3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Have a luxury experience</h3>
          <h3>R500 per night</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
    <div className="container">
  <div className='secondbox'>
<img src={Room3} ></img>
  </div>


<div className='form'>
<h2>Book a Hotel room</h2>
<p>Book online.Day rooms with same day  check-in and check-out.</p>

<input type="text" placeholder=' Your name'  onChange={(event)=>setName(event.target.value)}></input>
<br></br>
<input type="text" placeholder=' Email Address'  onChange={(event)=>setEmail(event.target.value)}></input>
<br></br>
<input type="text" placeholder='Phone number'  onChange={(event)=>setPhone(event.target.value)}></input>
<br></br>

<Col><br></br><Form.Select aria-label="Default select example" onChange={(event)=>setGuest(event.target.value)}>

<option>Guests</option>

<option value="1">One</option>

<option value="2">Two</option>

<option value="3">Three</option>
<option value="4">four</option>
<option value="5">five</option>

</Form.Select></Col>
<br></br>

<div className='form-check-in' >

<input type="date"  onChange={(event)=>setCheckin(event.target.value)} ></input>
<input type="date"  onChange={(event)=>setCheckout(event.target.value)} ></input>
</div>
<div className='form-check-out'>
<input type="time"  onChange={(event)=>setTimein(event.target.value)} ></input>
<input type="time"  onChange={(event)=>setTimeout(event.target.value)} ></input>

</div>
<div className='form-button'>
<button onClick={add}><p>Reserve</p></button>
</div>
</div>


</div>




             </section>

        </div>
    )
}
export default Superior;