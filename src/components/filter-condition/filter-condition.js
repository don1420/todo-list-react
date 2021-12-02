import React from "react";
import { connect } from "react-redux";
import { setFilterCondition } from "../../actions";
import { FILTER_CONDITION_ACTIVE, FILTER_CONDITION_ALL, FILTER_CONDITION_DONE, FILTER_CONDITION_IMPORTANT } from "../../constants";

const FilterCondition = ({ filterCondition, setFilterCondition }) => {
    function setFilterConditionHandler(filterCondition) {
        setFilterCondition(filterCondition);
    }

    return (
        <div className="btn-group">
            <button type="button"
                    className={`btn  
                    ${ filterCondition === FILTER_CONDITION_ALL ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFilterConditionHandler(FILTER_CONDITION_ALL)}>All</button>
            <button type="button"
                    className={`btn  
                    ${ filterCondition === FILTER_CONDITION_ACTIVE ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFilterConditionHandler(FILTER_CONDITION_ACTIVE)}>Active</button>
            <button type="button"
                    className={`btn 
                    ${ filterCondition === FILTER_CONDITION_DONE ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFilterConditionHandler(FILTER_CONDITION_DONE)}>Done</button>
            <button type="button"
                    className={`btn  
                    ${ filterCondition === FILTER_CONDITION_IMPORTANT ? 'btn-primary' : 'btn-outline-secondary'}`}
                    onClick={() => setFilterConditionHandler(FILTER_CONDITION_IMPORTANT)}>Important</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        filterCondition: state.filterCondition
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilterCondition: (filterCondition) => dispatch(setFilterCondition(filterCondition))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCondition);