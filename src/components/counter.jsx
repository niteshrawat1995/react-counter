import React, { Component } from "react";

class Counter extends Component {
    // state contains all the input data from Counter Component.
    state = {
        // value: this.props.counter.value,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"]
    };
    product = 1;
    styles = {
        fontSize: 50,
        fontWeight: "bold"
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p> There is no tags</p>;
        return (
            <ul>
                {this.state.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }
    // make event handler functions are arrow function to auto bind them with "this"
    // handleIncrement = product => {
    //     console.log(this.state.value);
    //     // setState let react know that state has been altered and it should reflect those changes in "render" element.
    //     this.setState({ value: this.state.value + 1 });
    // };

    render() {
        console.log("props", this.props);
        return (
            <React.Fragment>
                <h1>Counter #{this.props.counter.id}</h1>
                <img src={this.state.imageUrl} alt="" />
                <span style={this.styles} className={this.getBadgeClasses()}>
                    {this.props.counter.value}
                </span>
                <span>{this.formatCount()}</span>
                {/* event-handling */}
                <button
                    className="btn btn-secondary btn-sm"
                    // onClick={this.handleIncrement}
                    // way of passing argument to an event function
                    onClick={() =>
                        this.props.onIncrement(this.props.counter.id)
                    }
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
                {/* falsy & trucy NOTE: boolean CAN be compared to string*/}
                {this.state.tags.length === 0 && <p> Please add a tag!</p>}
                {/* conditional rendering */}
                {this.renderTags()}
            </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        // object destructing or property(s) unpacking
        const { value: count } = this.props.counter;
        return count === 0 ? "Zero" : count;
        // return this.state.count === 0 ? "Zero" : this.state.count;
    }
}

export default Counter;
