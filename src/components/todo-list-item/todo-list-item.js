import React from "react";
import { connect } from "react-redux";
import { removeTodoItem, markAsImportant } from "../../actions";
// import './todo-list-item.css';
import './todo-list-item.less';

const TodoListItem = ({ id, label, isCompleted, removeTodoItem, markAsImportant }) => {
    const style = isCompleted ?
        {
            textDecoration: 'line-through',
            color: '#198754',
            fontWeight: '700'
        } :
        {
            textDecoration: 'none',
            color: '#212529',
            fontWeight: '400'
        }

    function removeTodoItemHandler (e, itemId) {
        e.stopPropagation();
        removeTodoItem(itemId);
    }

    function markAsImportantHandler (e, itemId) {
        e.stopPropagation();
        markAsImportant(itemId);
    }

    return (
        <span className="todo-list-item">
            <span
                className="todo-list-item-label"
                style={ style }>
                { label }
            </span>

            <button type="button" className="btn btn-outline-danger"
                    onClick={ (e) => removeTodoItemHandler(e, id) }>
                <i className="fa fa-trash"></i>
            </button>
            <button type="button" className="btn btn-outline-success"
                    onClick={ (e) => markAsImportantHandler(e, id) }>
                <i className="fa fa-exclamation"></i>
            </button>
        </span>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodoItem: (todoItemId) => dispatch(removeTodoItem(todoItemId)),
        markAsImportant: (todoItemId) => dispatch(markAsImportant(todoItemId))
    };
};

export default connect(null, mapDispatchToProps)(TodoListItem);