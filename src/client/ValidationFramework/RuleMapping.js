var ValidationFramework;
(function (ValidationFramework) {
    var RuleMapping = (function () {
        function RuleMapping() {
            this._configs = [];
            this.buildConfigList();
        }
        RuleMapping.prototype.getConfig = function (metadataRuleType) {
            for (var i = 0; i < this._configs.length; i++) {
                var config = this._configs[i];
                if (config.ruleType === metadataRuleType) {
                    return config;
                }
            }
            return null;
        };
        RuleMapping.prototype.buildConfigList = function () {
            this._configs.push(new RuleConfig(""));
        };
        return RuleMapping;
    })();
    ValidationFramework.RuleMapping = RuleMapping;
    var RuleConfig = (function () {
        function RuleConfig(ruleType) {
            this.ruleType = ruleType;
        }
        return RuleConfig;
    })();
    ValidationFramework.RuleConfig = RuleConfig;
})(ValidationFramework || (ValidationFramework = {}));
//# sourceMappingURL=RuleMapping.js.map