import { Component } from 'react';

export class Counter extends Component {
    // constructor(x,y){
    //     this.x = x;
    //     this.y = y;
    // }
    state = {
        number: this.props.value,
        test: 'test',
    };

    add = () => {
        // this.state.number += 1;
        // this.setState({number :+1})
        this.setState((prevState) => {
            return { number: prevState.number + 1 };
        })
    }
    minus = () => {
        this.setState((prevState) => {
            return { number: prevState.number - 1 };
        })
    }
    render() {
        console.log(this.props);
        return <div>
            <p>{this.state.number}</p>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>
        </div>
    }
}