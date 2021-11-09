import React, {Component} from "react";
import "./SearchBar.css"

class SearchBar  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <ul>
                <li><a>Home</a></li>
                <li><a >Search by Artist</a></li>
                <li><a >Search by Album</a></li>
                <li><a >Search by Release Date</a></li>
                <li><a >Search by Release Date</a></li>
            </ul>



        );
    }
}
 
export default SearchBar;