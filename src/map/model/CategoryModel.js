export class CategoryModel {

    name;
    type;
    isChecked;

    constructor(data) {
        this.name = data?.name;
        this.type = data?.type;
        this.isChecked = false;
    }
}
