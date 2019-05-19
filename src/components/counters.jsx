import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({ counters: counters });
    };

    handleDelete = counterId => {
        console.log("will delete the counter", counterId);
        const counters = this.state.counters.filter(
            counter => counter.id !== counterId
        );
        this.setState({ counters: counters });
    };

    handleIncrement = counterId => {
        const counters = this.state.counters.map(counter =>
            counter.id === counterId ? counter.value++ : counter
        );
        this.setState({ Counters: counters });
    };
    render() {
        return (
            <div>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
