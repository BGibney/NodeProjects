import React, { Component } from 'react';
import './App.css';

import BeerSelectForm from './components/BeerSelectForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beerSelection: '',
      defaultColor: 'amber',
      beers: [{
        color: 'amber',
        name: 'Jack Amber',
        key: 1
      }, {
        color: 'dark',
        name: 'Gout Stout',
        key: 2
      }]
    };
  }
    formSubmitted(event) {
      event.preventDefault();
      
      this.setState({
        beerSelection: event.target.value
      });
      console.log(this.beerSelection);
    }
    
    beerChanged(event) {
      this.setState({
        beerSelection: event.target.value
      });
    }

    render() {
      return (
        
      
      <div className="App">
      <h1>Brewery Expert</h1>
      
      <BeerSelectForm 
        formSubmitted={this.formSubmitted.bind(this)} 
        beerChanged={this.beerChanged.bind(this)} 
        defaultColor={this.defaultColor} 
        beers={this.state.beers}
      />


    </div>);
    }
  
}

export default App;
