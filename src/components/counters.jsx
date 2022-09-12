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

            <div className="container-fluid"
                    style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }} 
            
            
            >
                <div className="row board-container">

                    <div className="Board">
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }} 
                        >
                            <img  src={'./images/EmptySCart.png'} />
                            <img  src={'./images/EmptySCart.png'} />
                            <img src={'./images/FilledSCart.png'} />
                        </div>
                            
                            {this.state.Counters.map( counter => <Counter key={counter.id} /> )}
            
                            
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Counters;