import React, { Component } from 'react';


class Counter extends Component {
    state={
        count: 0,
        imageURL: "https://picsum.photos/200",
        tags:['Veggy','Meat','Stationary'] 
    };

    styles={
        fontSize: 15,
        fontWeight: 'bold'
    };

    handleIncrement=()=>{
        this.setState({count:this.state.count+1});
    };

    handleDecrement=()=>{
        this.setState({count:this.state.count-1});
    };

    render() { 

        return (
                <div>
                    <img src={this.state.imageURL}/>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button 
                        onClick={this.handleIncrement} 
                        className="btn btn-secondary btn-sm"
                    >
                        +Increment
                    </button>
                     | 
                    <button 
                        onClick={this.handleDecrement} 
                        className="btn btn-secondary btn-sm"
                    >
                        -Decrement
                    </button>
                    <ul>
                        {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
                    </ul>
                </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count}=this.state;
        return count===0?"Zero":count;
    }
}
 
export default Counter;