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
import {routes} from '../routes';

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
          {routes.data.map((route)=>
          <Route exact path={route.path} component={route.component} key={route.key}/>)}
          <Route component={routes.defaultRoute.component}/>
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
