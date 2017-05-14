export class Todo {
    id: number;
    name: string = '';
    description: string = '';
    complete: boolean = false;
    status: string = ''; // do poprawy

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
