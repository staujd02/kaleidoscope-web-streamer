const name = 'Invalid Sort Order Exception';
export default class InvalidSortOrderException extends Error {
    public invalidSortOrder: string;
    constructor(invalidSortOrder: string){
        super(`${name}: ${invalidSortOrder} is not a valid sort order`);
        this.invalidSortOrder = invalidSortOrder;
        this.name = name;
    }
}