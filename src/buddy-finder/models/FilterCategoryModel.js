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
    .filter(item => item.isSelected)
    .map(item => ({
        category: item.type,
        phrase: item.value?.join(',')
    }));
