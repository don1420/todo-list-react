import React from "react";
import { connect } from "react-redux";
import TodoListItem from "../todo-list-item/todo-list-item";
import { markAsDone } from "../../actions";
import {
    FILTER_CONDITION_ACTIVE,
    FILTER_CONDITION_ALL,
    FILTER_CONDITION_DONE,
    FILTER_CONDITION_IMPORTANT
} from "../../constants";
import './todo-list.css';

const TodoList = ({ todos, filterCondition, markAsDone }) => {
    const visibleTodos = getVisibleTodos(todos, filterCondition);

    function getVisibleTodos (todos, filterCondition) {
        if (filterCondition === FILTER_CONDITION_ALL) {
            return todos.filter(item => item.isVisible);
        }

        if (filterCondition === FILTER_CONDITION_DONE) {
            return todos.filter(item => item.isVisible && item.isCompleted);
        }

        if (filterCondition === FILTER_CONDITION_ACTIVE) {
            return todos.filter(item => item.isVisible && !item.isCompleted);
        }

        if (filterCondition === FILTER_CONDITION_IMPORTANT) {
            return todos.filter(item => item.isVisible && item.isImportant);
        }
    };

    function markAsDoneHandler (itemId) {
        markAsDone(itemId);
    }

    return (
        <ul className="list-group todo-list">
            {
                visibleTodos.map((item) => {
                    return (
                        <li key={ item.id }
                            className={`list-group-item bg-opacity-25 ${ item.isImportant ? 'bg-danger' : 'bg-white'}`}
                            onClick={ () => markAsDoneHandler(item.id) }>
                            <TodoListItem { ...item } />
                        </li>
                    );
                })
            }
        </ul>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        markAsDone: (todoItemId) => dispatch(markAsDone(todoItemId))
    };
};

export default connect(null, mapDispatchToProps)(TodoList);