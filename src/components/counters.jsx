import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {  } 
    render() { 

        return (
            <div>
                    
                    <img align="left" src={'./images/EmptySCart.png'} />
                    <img align="right" src={'./images/FilledSCart.png'} />
                       
                <Counter /><hr color="blue"/><Counter />
           </div>
        );
    }
}
 
export default Counters;