import SourceValidation from "./Source";
import MissingPropertyException from "../Exceptions/MissingPropertyException";

export default class SourceRepositoryValidation {

    public static validate(sourceRepositoryState: SourceRepository): void {
        let validation = new SourceRepositoryValidation();
        validation.validateState(sourceRepositoryState);
    }

    private constraints: ((s: SourceRepository) => void)[];

    constructor() {
        this.constraints = [
            this.propertyValidation,
            this.streamValidation
        ];
    }

    private validateState(sourceRepositoryState: SourceRepository): void {
        this.constraints.forEach(c => c(sourceRepositoryState));
    }

    private propertyValidation = (s: SourceRepository): void => {
        if (!s.streams)
            throw new MissingPropertyException('streams');
        
    }

    private streamValidation = (s: SourceRepository): void => {
        s.streams.forEach(stream => SourceValidation.validate(stream));
    }
}