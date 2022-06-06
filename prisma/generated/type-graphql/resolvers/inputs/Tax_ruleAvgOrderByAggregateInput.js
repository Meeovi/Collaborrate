"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleAvgOrderByAggregateInput = class Tax_ruleAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleAvgOrderByAggregateInput.prototype, "prod_id", void 0);
Tax_ruleAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Tax_ruleAvgOrderByAggregateInput);
exports.Tax_ruleAvgOrderByAggregateInput = Tax_ruleAvgOrderByAggregateInput;
