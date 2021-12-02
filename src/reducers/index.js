import * as constants from "../constants";

const initialState = {
    todos: [],
    filterCondition: constants.FILTER_CONDITION_ALL
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case constants.REMOVE_TODO_ITEM: {
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload)

            return {
                ...state,
                todos: filteredTodos
            };
        }

        case constants.MARK_AS_DONE: {
            const itemId = state.todos.findIndex(todo => todo.id === action.payload);
            const newTodos = [...state.todos];
            newTodos[itemId].isCompleted = !newTodos[itemId].isCompleted;

            return {
                ...state,
                todos: newTodos
            }
        }

        case constants.MARK_AS_IMPORTANT: {
            const itemId = state.todos.findIndex(todo => todo.id === action.payload);
            const newTodos = [...state.todos];
            newTodos[itemId].isImportant = !newTodos[itemId].isImportant;

            return {
                ...state,
                todos: newTodos
            }
        }

        case constants.SEARCH_TERM: {
            const newTodos = state.todos.map(todo => {
                if (todo.label.indexOf(action.payload) === -1) {
                    todo.isVisible = false;
                }
                else {
                    todo.isVisible = true;
                }

                return todo;
            });

            return {
                ...state,
                todos: newTodos
            }
        }
        case constants.FILTER_CONDITION: {
            return {
                ...state,
                filterCondition: action.payload
            }
        }

        default: {
            return state;
        }
    }
};

export default reducer;