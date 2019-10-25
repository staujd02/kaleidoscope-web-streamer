const name = 'Duration Out of Bounds';
export default class DurationOutOfBoundsException extends Error {
    public outOfRangeDuration: string;
    constructor(outOfRangeDuration: string){
        super(`${name}: ${outOfRangeDuration} is not a valid duration`);
        this.name = name;
        this.outOfRangeDuration = outOfRangeDuration;
    }
}