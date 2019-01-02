import React, {Component} from 'react'


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}

                />


            </div>
        );
    }

    //we use functional variable because the this key word gave an error
    // to fix it we had to used arrow function
    onInputChange = (event) => {
        this.setState({term: event.target.value});
        this.props.onSearchTermChange(event.target.value);

    }
}

export default SearchBar;