import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import services from './component/services';  
import Navbar from './component/Navbar';



class App extends React.Component {
   render(){
       return(
      <Router>
      <div>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/services" component={services}/>
      
      </div>
      </Router>
      )
   }
 
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
