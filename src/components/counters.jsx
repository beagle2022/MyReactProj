import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = {  
        Counters: [

            {id:1,value:0},
            {id:2,value:2}
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
                            width: '50vh',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }} 
                >

                       
                    {this.state.Counters.map( counter => <Counter key={counter.id} /> )}
                </div>
        );
    }
}
 
export default Counters;