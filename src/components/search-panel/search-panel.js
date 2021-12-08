import React from "react";
import { connect } from "react-redux";
// import './search-panel.css';
import './search-panel.less';
import { searchTerm } from "../../actions";

const SearchPanel = ({ searchTerm }) => {
    const searchTermHandler = (e) => {
        searchTerm(e.target.value);
    }
    
    return <input type="text"
                  placeholder="Search"
                  className="search-field"
                  onChange={ searchTermHandler }/>
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchTerm: (term) => dispatch(searchTerm(term))
    };
};

export default connect(null, mapDispatchToProps)(SearchPanel);