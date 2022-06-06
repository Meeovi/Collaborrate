"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_ruleAvgAggregate = class Tax_ruleAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleAvgAggregate.prototype, "prod_id", void 0);
Tax_ruleAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Tax_ruleAvgAggregate", {
        isAbstract: true
    })
], Tax_ruleAvgAggregate);
exports.Tax_ruleAvgAggregate = Tax_ruleAvgAggregate;
