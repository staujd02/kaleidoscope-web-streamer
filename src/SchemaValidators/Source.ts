import MissingPropertyException from "../Exceptions/MissingPropertyException";
import DurationOutOfBoundsException from "../Exceptions/DurationOutOfBounds";
import InvalidSortOrderException from "../Exceptions/InvalidSortOrderException";

export default class SourceValidation {

    public static validate(source: Source): void {
        let validation = new SourceValidation();
        validation.validateState(source);
    }

    private constraints: ((s: Source) => void)[];

    constructor() {
        this.constraints = [
            this.propertyValidation,
            this.durationValidation,
            this.sortOrderValidation
        ];
    }

    private validateState(sourceRepositoryState: Source): void {
        this.constraints.forEach(c => c(sourceRepositoryState))
    }

    private propertyValidation = (s: Source): void => {
        let keys: (keyof Source)[] = ["duration", "isEnabled",
            "sortOrder", "source", "title", "key"];
        keys.forEach(k => {
            if (s[k] === undefined)
                throw new MissingPropertyException(k);
        });
    }

    private durationValidation = (s: Source): void => {
        if (s.duration <= 0)
            throw new DurationOutOfBoundsException(s.duration.toString());
    }

    private sortOrderValidation = (s: Source): void => {
        if (s.sortOrder < 0)
            throw new InvalidSortOrderException(s.sortOrder.toString());
    }
}
