"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleOrderByRelationAggregateInput = class Tax_ruleOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByRelationAggregateInput.prototype, "_count", void 0);
Tax_ruleOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Tax_ruleOrderByRelationAggregateInput);
exports.Tax_ruleOrderByRelationAggregateInput = Tax_ruleOrderByRelationAggregateInput;
