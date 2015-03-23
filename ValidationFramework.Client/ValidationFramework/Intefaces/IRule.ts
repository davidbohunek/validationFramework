module ValidationFramework {
    export interface IRule {
        isValid(model): IValidationResult;
    }

    export interface IValidationResult {
        isValid: boolean;
        errorMessage: string;
    }
} 