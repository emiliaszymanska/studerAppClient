export class FilterCategoryModel {

    label;
    type;
    value;
    isSelected;

    constructor(data) {
        this.label = data?.label;
        this.type = data?.type;
        this.value = data?.value;
        this.isSelected = false;
    }
}

export const FilterCategoryModelToDTO = (modelList) => (modelList || [])
    .filter(item => item.isSelected);
