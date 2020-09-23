import React, { Component } from 'react';
class Collapsible extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e) {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (<div className="collaps">
            <div onClick={(e) => this.togglePanel(e)} className={this.state.open ? 'prdHeaderCollaps activeCollaps' : "prdHeaderCollaps"} >
                {this.props.title}</div>
            {
                this.state.open ? (
                    <div className="prdContentCollaps">
                        {this.props.children}
                    </div>
                ) : null
            }
        </div >);
    }
}

export default Collapsible;