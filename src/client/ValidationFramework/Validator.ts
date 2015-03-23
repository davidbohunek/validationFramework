module ValidationFramework {
    export class Validator implements IValidator {

        private _rules: IRule[];

        constructor(rules: IRule[]) {
            this._rules = rules || [];
        }

        public isValid(model): boolean {

            var isValid = true;

            for (var i = 0, length = this._rules.length; i < length; i++) {
                var rule = this._rules[i];
                var result = rule.isValid(model);

                if (!result.isValid) {
                    isValid = false;
                    if (!this.errorMessage) {
                        this.errorMessage = result.errorMessage;
                    }
                }
            }

            return isValid;
        }

        public isInvalid(model): boolean {
            return false;
        }

        public isDirty(model): boolean {
            return false;
        }

        public isPristine(model): boolean {
            return false;
        }

        public modelProperties: IModelProperty[];

        public errorMessage: string;
    }
}