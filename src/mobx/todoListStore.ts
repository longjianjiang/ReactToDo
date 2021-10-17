import { makeObservable, observable, computed, action } from "mobx";
import { ITodoListItem } from "../redux/todoList/todoList";

let innerNextTodoId = 0;

export class TodoListStore {
    public todos: Array<ITodoListItem> = [];
    
    constructor() {
        makeObservable(this, {
            todos: observable,
            completedTodos: computed,
            incompleteTodos: computed,
            addTodo: action,
            toggleTodo: action,
            deleteTodo: action,
            editTodo: action,
        });
    }

    public addTodo = (name: string) => {
        const todo = {
            id: innerNextTodoId++,
            name,
            completed: false
        }
        this.todos.push(todo);
    };

    public toggleTodo = (id: number) => {
        const updated = this.todos.map(todo => {
            if (todo.id == id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.todos = updated;
    };

    public deleteTodo = (id: number) => {
        const updated = this.todos.filter(todo => todo.id !== id);
        this.todos = updated;
    };

    public editTodo = (id: number, name: string) => {
        const updated = this.todos.map(todo => {
            if (todo.id == id) {
                todo.name = name;
            }
            return todo;
        });
        this.todos = updated;
    };

    get completedTodos() {
        return this.todos.filter(todo => todo.completed);
    }

    get incompleteTodos() {
        return this.todos.filter(todo => !todo.completed);
    }
};

export default new TodoListStore();