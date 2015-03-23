module ValidationFramework.Rules {
    export class RequiredRule implements IRule{
        constructor() {

        }

        public isValid(model): IValidationResult {
            return {
                isValid: false,
                errorMessage: "work in progress"
            };
        }
    }
}