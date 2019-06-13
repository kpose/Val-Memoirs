import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.val);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}  className="flexContainer">
                    <label><h2>Image Search: </h2></label>
                    <input
                        className="inputStyle"
                        type="text"
                        value={this.state.val}
                        onChange={this.onInputChange}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;