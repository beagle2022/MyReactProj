import React, { Component } from 'react';

class Counter extends Component {
    state={
        count: 0,
        imageURL: "https://picsum.photos/200",
        tags:["Veggies","Fish", "Cereals", "Shoes", "Garment", "Furniture"]
    };

    

    styles={
        fontSize: 15,
        fontWeight: 'bold'
 
    };

    handleIncrement=()=>{
        this.setState({count:this.state.count+1}); 
    };

    handleDecrement=()=>{
        if(this.state.count<=0) this.b1.disabled=true;
        this.setState({count:this.state.count-1});
    };

    renderTags(){
        if(this.state.tags.length===0) return <p>'There are no Tags!'</p>;
        return <ul>{this.state.tags.map(tag =><li key={tag}>{tag}</li>)}</ul>;

    }

    render() { 

        return (
            
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100vh',
                    }}
                >
                <div>
                    <p><b>
                        {this.renderTags()}
                        { this.state.tags.length===0 && "Please create a new tag!"} 
                    </b></p>  
                </div>

                    <div>
                        <span class="border border-info">
                            <img src={this.state.imageURL} class="border border-dark"/>
                        </span>
                            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                        
                    </div>

                    <div>
                        <button 
                            onClick={this.handleIncrement} 
                            className="btn btn-secondary btn-sm"
                        >
                            +

                        </button>
                        | 
                        <button id ="b1"
                            onClick={this.handleDecrement} 
                            className="btn btn-secondary btn-sm"
                        >
                            -
                            
                        </button>
                    </div>
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
