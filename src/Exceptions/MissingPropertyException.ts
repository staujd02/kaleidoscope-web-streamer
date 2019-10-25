const name = "Missing Property Exception";

export default class MissingPropertyException extends Error {
    public missingProperty: string
    constructor(missingProperty: string) {
        super(`${name}: '${missingProperty}' is not defined`);
        this.name = name;
        this.missingProperty = missingProperty;
    }
}