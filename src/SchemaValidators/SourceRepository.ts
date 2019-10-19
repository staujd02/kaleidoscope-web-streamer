import SourceValidation from "./Source";

export default class SourceRepositoryValidation {

    public static validate(sourceRepositoryState: SourceRepository): boolean {
        let validation = new SourceRepositoryValidation();
        return validation.validateState(sourceRepositoryState);
    }

    private passed: boolean;
    private constraints: ((s: SourceRepository) => void)[];

    constructor() {
        this.constraints = [
            this.propertyValidation,
            this.streamValidation
        ];
        this.passed = true;
    }

    private validateState(sourceRepositoryState: SourceRepository): boolean {
        for (let i = 0; i < this.constraints.length; i++) {
            this.constraints[i](sourceRepositoryState);
            if (!this.passed)
                return false
        }
        return true;
    }

    private propertyValidation = (s: SourceRepository): void => {
        if (!s.streams)
            this.passed = false;
    }

    private streamValidation = (s: SourceRepository): void => {
        s.streams.forEach(stream => {
            if (!SourceValidation.validate(stream))
                this.passed = false;
        });
    }
}