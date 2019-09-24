import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'marijuana'
        };
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    handleSubmitSearch = () => {
        const { onSearch } = this.props;
        const { text } = this.state;
        onSearch(text);
    }

    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.handleChange} />
                <button type="button" onClick={this.handleSubmitSearch}>
                    Search
                </button>
            </div>
        );
    }
}

export default Search;
