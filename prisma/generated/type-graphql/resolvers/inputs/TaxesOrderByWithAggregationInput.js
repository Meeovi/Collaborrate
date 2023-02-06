"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TaxesAvgOrderByAggregateInput_1 = require("../inputs/TaxesAvgOrderByAggregateInput");
const TaxesCountOrderByAggregateInput_1 = require("../inputs/TaxesCountOrderByAggregateInput");
const TaxesMaxOrderByAggregateInput_1 = require("../inputs/TaxesMaxOrderByAggregateInput");
const TaxesMinOrderByAggregateInput_1 = require("../inputs/TaxesMinOrderByAggregateInput");
const TaxesSumOrderByAggregateInput_1 = require("../inputs/TaxesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TaxesOrderByWithAggregationInput = class TaxesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "taxDefault", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "taxRuleName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TaxesOrderByWithAggregationInput.prototype, "taxCategory", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesCountOrderByAggregateInput_1.TaxesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesCountOrderByAggregateInput_1.TaxesCountOrderByAggregateInput)
], TaxesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesAvgOrderByAggregateInput_1.TaxesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesAvgOrderByAggregateInput_1.TaxesAvgOrderByAggregateInput)
], TaxesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMaxOrderByAggregateInput_1.TaxesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMaxOrderByAggregateInput_1.TaxesMaxOrderByAggregateInput)
], TaxesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesMinOrderByAggregateInput_1.TaxesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesMinOrderByAggregateInput_1.TaxesMinOrderByAggregateInput)
], TaxesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TaxesSumOrderByAggregateInput_1.TaxesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TaxesSumOrderByAggregateInput_1.TaxesSumOrderByAggregateInput)
], TaxesOrderByWithAggregationInput.prototype, "_sum", void 0);
TaxesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TaxesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TaxesOrderByWithAggregationInput);
exports.TaxesOrderByWithAggregationInput = TaxesOrderByWithAggregationInput;
