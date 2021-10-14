import { observable, makeObservable } from "mobx";
import { TodoFilterType } from "../redux/todoFilter/todoFilter";

class TodoFilterStore {
    filter = TodoFilterType.SHOW_ALL;

    constructor() {
        makeObservable(this, {
            filter: observable,
        });
    }
};

export default new TodoFilterStore();