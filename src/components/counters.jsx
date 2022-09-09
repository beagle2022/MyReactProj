import React, { Component } from 'react';
import Counter from "./counter";


class Counters extends Component {
    state = {  } 
    render() { 
        <div>
            <span class="border border-info">
                <img src={this.state.imageURL} class="border border-dark"/>
            </span>
        
        </div>
        return (<div><Counter /><Counter /></div>);
    }
}
 
export default Counters;