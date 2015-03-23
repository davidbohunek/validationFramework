module ValidationFramework {
    export interface IValidator {
        isValid(model): boolean;
        isInvalid(model): boolean;
        isDirty(model): boolean;
        isPristine(model): boolean;
        errorMessage: string;
        modelProperties: IModelProperty[];
    }

    export interface IModelProperty {
        canEdit: boolean;
        isValid: boolean;
        isInvalid: boolean;
        isDirty: boolean;
        isPristine: boolean;
        errorMessage: string;
    }
}