import Card from 'react-bootstrap/Card';
import Menupage from '../images/restaurant.png'
import beef from '../images/grilled beef.png.jpg'
import vegie from '../images/vegie.png.png'
import frensh from '../images/frensh taost.png'
import pancakes from '../images/pancakes.jpg'
import toffee from '../images/sticky toffee pudding.png'
import lemon from '../images/lemon splach drink.png'
import Cokedrink from '../images/cokedrink.jpg'
import Drinkwater from '../images/drinkwater.jpg'


function Menu(){
    return(
        <section className='about' id='menu'>
        <div className="sectionTitle">Our <span>Menu</span> </div>
        <h5>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
             Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</h5>
<div className='container'>
    <div>
        <br></br>
    <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={Menupage} />
    </Card>
    </div>


    <div className=' box'>
        <br></br>
<h1>Mains</h1>
<br></br>
 <h4>Grilled Beef with potatoes</h4>
 <div className='list'>
 <img src={beef}/>
 </div>
<br></br><br></br>

<h4>Vegie Omelet</h4>
<div className='listbox'>
 <img src={frensh}/>
 </div>
 <br></br>

 <h4>French Toast Combo</h4>
 <div className='list-list'>
 <img src={vegie}/>
 </div>

 <h1>Desserts</h1>
<br></br>
<h4>Pancakes</h4>
<div className='list-list-list'>
 <img src={pancakes}/>
 </div>
<br></br>
<h4>Sticky Toffee Pudding</h4>
<div className='list-list'>
 <img src={toffee}/>
 </div>

<br></br>
 
 <h1>Drinks</h1>
 <h4>Lemonade, Lemon Squash</h4>
<div className='list-list2'>
 <img src={lemon}/>
 </div>
 <br></br>
 <h4>Coke, Diet Coke, Coke Zero</h4>
<div className='list-list3'>
 <img src={Cokedrink}/>
 </div>
 <br></br>
 <h4>Spring Water</h4>
<div className='list-list4'>
 <img src={ Drinkwater}/>
 </div>
</div>

    </div>

        </section>
    )
}
export  default Menu;