import React from "react";
import { connect } from "react-redux";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import FilterCondition from "../filter-condition";
import TodoList from "../todo-list";
import TodoForm from "../todo-form/todo-form";
import './app.css';

const App = ({ todos, filterCondition }) => {
    return (
        <div className="container">
            <div className="todo-list-container">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <FilterCondition />
                </div>
                <TodoList todos={ todos } filterCondition={filterCondition}/>
                <TodoForm />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filterCondition: state.filterCondition
    }
};

export default connect(mapStateToProps)(App);