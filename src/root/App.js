import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import Home from "../components/home/Home"
import About from "../components/about/About"
import Header from "../components/header/Header"
import Contact from '../components/contact/Contact';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import FreightForwading from '../components/freight_forwarding/FreightForwarding';
import Tracking from '../components/tracking/Tracking';

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact_us" component={Contact} />
          <Route exact path="/freight_forwarding" component={FreightForwading} />
          <Route exact path="/tracking" component={Tracking} />
          <Route component={Home} />
        </Switch>
        <Footer/>
        </>      
      </Router>
    )
  }
}



export default App;


// import React, { Component } from 'react';
// import {ThemeContext,Themes} from './theme-context';
// import ThemeToggleButton from './theme-toggler-button'
// class App extends Component {
//   constructor(props){
//     super(props);
//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:state.theme === Themes.dark ?
//         Themes.light : Themes.dark
//       }));
//     }
//     this.state = {
//       theme:Themes.light,
//       toggleTheme:this.toggleTheme
//     }
//   }
//   render() {
//     return (
//       <ThemeContext.Provider value={this.state}>
//         <Content/>
//       </ThemeContext.Provider>
//     );
//   }
// }
// function Content(){
//   return (
//     <ThemeToggleButton/>
//   )
// }

// export default App;
