

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';



function Home (){

    return(
  
<>

<section class="jumbotron" id='home'>
  <div className='content'>
  <h5 >Welcome to our 5star hotel</h5>
  <h1>Most Relaxing Place</h1>



</div>

<div>

<section>


<div className='table' id='table'>

        <Row>

            <Col><label>Arival Date</label><br></br><input type="date"></input></Col>

            <Col><label>Departure Date</label><br></br><input type="date"></input></Col>

            <Col><label>Guests</label><br></br><Form.Select aria-label="Default select example">

      <option>#Select</option>

      <option value="1">One</option>

      <option value="2">Two</option>

      <option value="3">Three</option>

    </Form.Select></Col>

            <Col><label>Click!</label><br></br> <Button variant="danger">Check Availability</Button>{' '}</Col>

            </Row>    

    </div>



</section>


</div>
</section>
</>
    )
  }
export default Home;