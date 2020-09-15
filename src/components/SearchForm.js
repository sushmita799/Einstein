import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            einstein_model: '',
            direction: '',
            kpi: ''
        };
    }

    onInputChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    };

    onFormSubmit = async (event) => {
        event.preventDefault();

        const searchData = {
            einstein_model: this.state.einstein_model,
            direction: this.state.direction,
            kpi: this.state.kpi
        }

        this.props.onFormSubmit(searchData);
    };

    render() {
        return (<form onSubmit={this.onFormSubmit}>
            <span style={{ width: "40%" }}>
                <label htmlFor="einstein_model">Which Einstein module should I use to</label>
                <input type="text" id="einstein_model" name="einstein_model" placeholder="Enter your Intent" value={this.state.einstein_model}
                    onChange={this.onInputChange} />
            </span>
            <span>
                <label htmlFor="so_as_to">so as to</label>
                <select value={this.state.direction} onChange={this.onInputChange} name='direction'>
                    
                    <option value="Maximize">maximize</option>
                    <option value="Minimize">minimize</option>
                </select>
            </span>
            <span>

                <select value={this.state.kpi} onChange={this.onInputChange} name='kpi'>
                <option >my objective</option>
                            <option>Out of Stock</option>
                            <option>Opportunity to Win Ratio</option>
                            <option>Up-Selling Rate</option>
                            <option>Cross-Selling Rate</option>
                            <option>Forecast Accuracy</option>
                            <option>Operational Efficiency</option>
                            <option>Average Resolution Time</option>
                            <option>Time On-Field</option>
                            <option>Returns</option>
                            <option>RoI</option>
                            <option>Time On Site</option>
                            <option>CSAT</option>
                            <option>Average Time to Hire</option>

                </select>
            </span>
            <span>
                <input type="submit" value='Show solutions' />
            </span>
        </form>)
    }

};

export default SearchForm;