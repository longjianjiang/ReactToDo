import { observable, makeObservable, action } from "mobx";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

export class TodoFilterStore {
    public filter = TodoFilterType.SHOW_ALL;
    
    constructor() {
        makeObservable(this, {
            filter: observable,
            setFilter: action,
        });
    }

    public setFilter = (filter: TodoFilterType) => {
        this.filter = filter;
    };
};

export default new TodoFilterStore();