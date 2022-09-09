import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {  } 
    render() { 

        return (
            <div>
                    <img align="left" src={"Pics\FilledSCart.PNG"} className="border border-dark"/>
                    <img align="right" src={"Pics\FilledSCart.PNG"} className="border border-dark"/>
                       
                <Counter /><hr color="blue"/><Counter />
           </div>
        );
    }
}
 
export default Counters;