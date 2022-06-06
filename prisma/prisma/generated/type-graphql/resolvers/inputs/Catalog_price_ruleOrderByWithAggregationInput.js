"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog_price_ruleOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Catalog_price_ruleAvgOrderByAggregateInput_1 = require("../inputs/Catalog_price_ruleAvgOrderByAggregateInput");
const Catalog_price_ruleCountOrderByAggregateInput_1 = require("../inputs/Catalog_price_ruleCountOrderByAggregateInput");
const Catalog_price_ruleMaxOrderByAggregateInput_1 = require("../inputs/Catalog_price_ruleMaxOrderByAggregateInput");
const Catalog_price_ruleMinOrderByAggregateInput_1 = require("../inputs/Catalog_price_ruleMinOrderByAggregateInput");
const Catalog_price_ruleSumOrderByAggregateInput_1 = require("../inputs/Catalog_price_ruleSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Catalog_price_ruleOrderByWithAggregationInput = class Catalog_price_ruleOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "rule", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "customer_groups", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "website", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "actions_apply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "actions_discount_amount", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "actions_discard_subsequent_rules", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleCountOrderByAggregateInput_1.Catalog_price_ruleCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleCountOrderByAggregateInput_1.Catalog_price_ruleCountOrderByAggregateInput)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleAvgOrderByAggregateInput_1.Catalog_price_ruleAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleAvgOrderByAggregateInput_1.Catalog_price_ruleAvgOrderByAggregateInput)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMaxOrderByAggregateInput_1.Catalog_price_ruleMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMaxOrderByAggregateInput_1.Catalog_price_ruleMaxOrderByAggregateInput)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleMinOrderByAggregateInput_1.Catalog_price_ruleMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleMinOrderByAggregateInput_1.Catalog_price_ruleMinOrderByAggregateInput)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Catalog_price_ruleSumOrderByAggregateInput_1.Catalog_price_ruleSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Catalog_price_ruleSumOrderByAggregateInput_1.Catalog_price_ruleSumOrderByAggregateInput)
], Catalog_price_ruleOrderByWithAggregationInput.prototype, "_sum", void 0);
Catalog_price_ruleOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Catalog_price_ruleOrderByWithAggregationInput", {
        isAbstract: true
    })
], Catalog_price_ruleOrderByWithAggregationInput);
exports.Catalog_price_ruleOrderByWithAggregationInput = Catalog_price_ruleOrderByWithAggregationInput;
