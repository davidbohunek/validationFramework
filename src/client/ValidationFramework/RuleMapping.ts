module ValidationFramework {
    export class RuleMapping {

        private _configs: RuleConfig[] = [];

        constructor() {
            this.buildConfigList();
        }

        public getConfig(metadataRuleType): RuleConfig {
            for (var i = 0; i < this._configs.length; i++) {
                var config = this._configs[i];
                if (config.ruleType === metadataRuleType) {
                    return config;
                }
            }

            return null;
        }

        private buildConfigList(): void {
            this._configs.push(new RuleConfig(""));
        }
    }

    export class RuleConfig {
        constructor(
            public ruleType: string) {

        }
    }
} 