import { makeObservable, observable, computed, action } from "mobx";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";
import { ITodoListItem } from "../redux/todoList/todoList";

let innerNextTodoId = 0;

export class TodoListStore {
    public todos: Array<ITodoListItem> = [];
    public filter: TodoFilterType = TodoFilterType.SHOW_ALL;

    constructor() {
        makeObservable(this, {
            todos: observable,
            filter: observable,
            filterTodos: computed,
            addTodo: action,
            toggleTodo: action,
            deleteTodo: action,
            editTodo: action,
            setFilter: action,
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

    public setFilter = (filter: TodoFilterType) => {
        this.filter = filter;
    };

    get filterTodos() {
        if (this.filter == TodoFilterType.SHOW_COMPLETED) {
            return this.todos.filter(todo => todo.completed); 
        } else if (this.filter == TodoFilterType.SHOW_ACTIVE) {
            return this.todos.filter(todo => !todo.completed);
        }

        return this.todos;
    };
};

export default new TodoListStore();