import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {  
        Counters: [

            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0}
        ]

    };
    render() { 

        return (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                   <div 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '80vh',
                            flexDirection: 'crow',
                            justifyContent: 'space-between',
                        }} >
                    <img align="left" src={'./images/EmptySCart.png'} />
                    
                    <img align="right" src={'./images/FilledSCart.png'} />

                    </div>
                       
                {this.state.Counters.map( counter => <Counter key={counter.id} /> )}
           </div>
        );
    }
}
 
export default Counters;