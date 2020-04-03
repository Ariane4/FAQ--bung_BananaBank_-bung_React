import React, { Component } from 'react'

class FaqItem extends Component {
    state = {
        expanded: false
    }
    FaqExpand = () => {
        this.setState({ expanded: !this.state.expanded });
    }
    render() {
        return (
            <section className="background">
                <h3 className="displayWithoutClick">"Why is React great?"</h3>
                <button onClick={this.FaqExpand}>+</button>
                <div style={this.state.expanded ? { display: "block" } : { display: "none" }} className="displayOnClick">
                    <h4>"Fast Learning Curve"</h4>
                </div>
            </section>
        );
    }
}

export default FaqItem;
