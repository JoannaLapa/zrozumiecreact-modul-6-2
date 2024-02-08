export function appReducer(state, action) {
	if (action.type === 'delete') {
		return {
			...state,
			todos: state.todos.filter(todo => todo.id !== action.id),
		}
	} else if (action.type === 'finish') {
		return {
			...state,
			todos: state.todos.map(todo => {
				if (todo.id !== action.id) {
					return todo
				}

				return {
					...todo,
					done: true,
				}
			}),
		}
	} else if (action.type === 'add') {
		return {
			isFormShown: false,
			todos: [
				...state.todos,
				{
					name: action.name,
					done: false,
					id: Math.random(),
				},
			],
		}
	} else if (action.type === 'open_form') {
		return {
			...state,
			isFormShown: true,
		}
	}
}