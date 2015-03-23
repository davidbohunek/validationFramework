var ValidationFramework;
(function (ValidationFramework) {
    var Rules;
    (function (Rules) {
        var RequiredRule = (function () {
            function RequiredRule() {
            }
            RequiredRule.prototype.isValid = function (model) {
                return {
                    isValid: false,
                    errorMessage: "work in progress"
                };
            };
            return RequiredRule;
        })();
        Rules.RequiredRule = RequiredRule;
    })(Rules = ValidationFramework.Rules || (ValidationFramework.Rules = {}));
})(ValidationFramework || (ValidationFramework = {}));
//# sourceMappingURL=RequiredRule.js.map