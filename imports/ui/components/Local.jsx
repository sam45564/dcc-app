import React, { Component } from 'react';

class Local extends Component {

    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleIncrement}>Click Me</button>
                <p>You've pressed the button {this.state.count} times.</p>
            </React.Fragment>
        )
    }
}

export default Local;
