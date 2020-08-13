import React from 'react';
import { Link } from 'react-router-dom';
import {Jumbotron, Grid , Row,Col, Image, Button} from 'react-bootstrap';
import "./Home.css" 

class Home extends React.Component{
	render(){
		return(
			 <Jumbotron>
			 <h2> welcome to code life</h2>
			  <p>This is how to build website</p>
			  <Link to="/about">  
			  <Button bsStyle="primary">About</Button> 
			  </Link>
			  </Jumbotron>

              
                               

			  
		
			)
	}
}
export default Home;