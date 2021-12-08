import React from "react";
import { connect } from "react-redux";
import uuid from 'react-uuid';
import { addTodoItem } from "../../actions";
// import './todo-form.css';
import './todo-form.less';

const TodoForm = ({ addTodoItem }) => {
    const addTodoItemHandler = (e) => {
        e.preventDefault();

        addTodoItem({
            id: uuid(),
            label: e.target.add_todo.value,
            isImportant: false,
            isCompleted: false,
            isVisible: true
        });

        e.target.add_todo.value = '';
    }

    return (
        <form onSubmit={ addTodoItemHandler } className="todo-form d-flex">
            <input name="add_todo" type="text" placeholder="Add a new TODO"/>
            <button type="submit" className="btn btn-success">Add TODO</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodoItem: (newTodoItem) => dispatch(addTodoItem(newTodoItem))
    };
};

export default connect(null, mapDispatchToProps)(TodoForm);