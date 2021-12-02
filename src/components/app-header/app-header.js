import React, { Fragment } from "react";
import { connect } from "react-redux";

const AppHeader = ({ todos }) => {
    return (
        <>
            <h1>Todo list</h1>
            <div>
                {
                    todos.length > 0 &&
                    <span className="text-primary fw-bold">
                        LEFT TO DO: { todos.filter(todo => todo.isCompleted === false).length },&nbsp;
                    </span>
                }
                {
                    todos.length > 0 &&
                    <span className="text-success fw-bold">
                        DONE: { todos.filter(todo => todo.isCompleted === true).length }
                    </span>
                }
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};


export default connect(mapStateToProps)(AppHeader);