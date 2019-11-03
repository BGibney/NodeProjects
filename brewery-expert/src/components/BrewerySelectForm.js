
import React, { Component } from 'react';

const BrewerySelectForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>

            <p>Select brewery preference</p> <br></br>
            

            <label htmlFor="music">Music style</label>
            <select id="music" 
            name="music" value={props.defaultMusic}>
                {props.breweries.map(brewery =>
                   <option key={brewery.key} 
                        value={brewery.key}>{brewery.music}</option>
                )};

            
                     

            </select> 


            <button type="submit">Choose color</button>
        </form>
        
    )
}

export default BrewerySelectForm;