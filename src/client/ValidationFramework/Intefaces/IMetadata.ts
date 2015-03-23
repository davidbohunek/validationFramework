module ValidationFramework {
    export interface IMetadata {
        properties: IPropertyMetadata;
    }

    export interface IPropertyMetadata {
        properyPath: string;
        propertyDataType: string;
        rules: IRuleMetadata[];
    }

    export interface IRuleMetadata {
        ruleType: string;
    }
}