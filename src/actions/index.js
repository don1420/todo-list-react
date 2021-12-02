import * as constants from "../constants";

const addTodoItem = (newTodoItem) => {
    return {
        type: constants.ADD_TODO_ITEM,
        payload: newTodoItem
    }
};

const removeTodoItem = (todoItemId) => {
    return {
        type: constants.REMOVE_TODO_ITEM,
        payload: todoItemId
    }
};

const markAsDone = (todoItemId) => {
    return {
        type: constants.MARK_AS_DONE,
        payload: todoItemId
    }
};

const markAsImportant = (todoItemId) => {
    return {
        type: constants.MARK_AS_IMPORTANT,
        payload: todoItemId
    }
};

const searchTerm = (term) => {
    return {
        type: constants.SEARCH_TERM,
        payload: term
    }
};

const setFilterCondition = (filterCondition) => {
    return {
        type: constants.FILTER_CONDITION,
        payload: filterCondition
    }
};

export {
    addTodoItem,
    removeTodoItem,
    markAsDone,
    markAsImportant,
    searchTerm,
    setFilterCondition
};