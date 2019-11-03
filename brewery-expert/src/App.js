import React, { Component } from 'react';
import './App.css';

import BeerSelectForm from './components/BeerSelectForm';
import BrewerySelectForm from './components/BrewerySelectForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beerSelection: '',
      defaultColor: 'amber',
      beers: [{
        key: 1,
        color: 'amber',
        name: 'Jack Amber'
        
      }, {
        key: 2,
        color: 'dark',
        name: 'Gout Stout'
        
      }],
      breweries: [{
        key: 1,
        name: 'Soaring Ridge',
        music: 'EDM/pop',
        weight: 0
      }, {
        key: 2,
        name: 'Chaos Mountain Brewery',
        music: 'Folk/country',
        weight: 0
      },{
        key: 3,
        name: 'Martin\'s',
        music: 'Rock/metal',
        weight: 0
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
      <BrewerySelectForm
        breweries={this.state.breweries}
      />

    </div>);
    }
  
}

export default App;
