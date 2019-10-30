
import React, { Component } from 'react';

const BeerSelectForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>

            <label htmlFor="beerColor">Select preferred beer color</label>
            <select onChange={props.beerChanged} id="beerColor" 
            name="beerColor" value={props.defaultColor}>
                {props.beers.map(beer =>
                   <option key={beer.key} value={beer.key}>{beer.color}</option>
                )};
                     

            </select> 

            <button type="submit">Choose color</button>
        </form>
        
    )
}

export default BeerSelectForm;