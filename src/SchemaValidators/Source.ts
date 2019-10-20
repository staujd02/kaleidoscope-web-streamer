export default class SourceValidation {

    public static validate(source: Source): boolean {
        let validation = new SourceValidation();
        return validation.validateState(source);
    }

    private passed: boolean;
    private constraints: ((s: Source) => void)[];

    constructor() {
        this.constraints = [
            this.propertyValidation,
            this.durationValidation,
            this.sortOrderValidation
        ];
        this.passed = true;
    }

    private validateState(sourceRepositoryState: Source): boolean {
        for (let i = 0; i < this.constraints.length; i++) {
            this.constraints[i](sourceRepositoryState);
            if (!this.passed)
                return false
        }
        return true;
    }

    private propertyValidation = (s: Source): void => {
        let keys: (keyof Source)[] = ["duration", "isEnabled",
            "sortOrder", "source", "title", "key"];
        keys.forEach(k => {
            if (s[k] === undefined)
                this.passed = false;
        });
    }

    private durationValidation = (s: Source): void => {
        if (s.duration <= 0)
            this.passed = false;
    }

    private sortOrderValidation = (s: Source): void => {
        if (s.sortOrder < 0)
            this.passed = false;
    }
}
