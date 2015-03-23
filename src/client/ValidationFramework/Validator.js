var ValidationFramework;
(function (ValidationFramework) {
    var Validator = (function () {
        function Validator(rules) {
            this._rules = rules || [];
        }
        Validator.prototype.isValid = function (model) {
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
        };
        Validator.prototype.isInvalid = function (model) {
            return false;
        };
        Validator.prototype.isDirty = function (model) {
            return false;
        };
        Validator.prototype.isPristine = function (model) {
            return false;
        };
        return Validator;
    })();
    ValidationFramework.Validator = Validator;
})(ValidationFramework || (ValidationFramework = {}));
//# sourceMappingURL=Validator.js.map