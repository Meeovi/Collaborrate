"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_ruleAvgOrderByAggregateInput_1 = require("../inputs/Tax_ruleAvgOrderByAggregateInput");
const Tax_ruleCountOrderByAggregateInput_1 = require("../inputs/Tax_ruleCountOrderByAggregateInput");
const Tax_ruleMaxOrderByAggregateInput_1 = require("../inputs/Tax_ruleMaxOrderByAggregateInput");
const Tax_ruleMinOrderByAggregateInput_1 = require("../inputs/Tax_ruleMinOrderByAggregateInput");
const Tax_ruleSumOrderByAggregateInput_1 = require("../inputs/Tax_ruleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_ruleOrderByWithAggregationInput = class Tax_ruleOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithAggregationInput.prototype, "tax_rate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleCountOrderByAggregateInput_1.Tax_ruleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleCountOrderByAggregateInput_1.Tax_ruleCountOrderByAggregateInput)
], Tax_ruleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleAvgOrderByAggregateInput_1.Tax_ruleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleAvgOrderByAggregateInput_1.Tax_ruleAvgOrderByAggregateInput)
], Tax_ruleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMaxOrderByAggregateInput_1.Tax_ruleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMaxOrderByAggregateInput_1.Tax_ruleMaxOrderByAggregateInput)
], Tax_ruleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleMinOrderByAggregateInput_1.Tax_ruleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleMinOrderByAggregateInput_1.Tax_ruleMinOrderByAggregateInput)
], Tax_ruleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_ruleSumOrderByAggregateInput_1.Tax_ruleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_ruleSumOrderByAggregateInput_1.Tax_ruleSumOrderByAggregateInput)
], Tax_ruleOrderByWithAggregationInput.prototype, "_sum", void 0);
Tax_ruleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleOrderByWithAggregationInput", {
        isAbstract: true
    })
], Tax_ruleOrderByWithAggregationInput);
exports.Tax_ruleOrderByWithAggregationInput = Tax_ruleOrderByWithAggregationInput;
