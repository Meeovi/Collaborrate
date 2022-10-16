"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_categoryOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_categoryAvgOrderByAggregateInput_1 = require("../inputs/Tax_categoryAvgOrderByAggregateInput");
const Tax_categoryCountOrderByAggregateInput_1 = require("../inputs/Tax_categoryCountOrderByAggregateInput");
const Tax_categoryMaxOrderByAggregateInput_1 = require("../inputs/Tax_categoryMaxOrderByAggregateInput");
const Tax_categoryMinOrderByAggregateInput_1 = require("../inputs/Tax_categoryMinOrderByAggregateInput");
const Tax_categorySumOrderByAggregateInput_1 = require("../inputs/Tax_categorySumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_categoryOrderByWithAggregationInput = class Tax_categoryOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_categoryOrderByWithAggregationInput.prototype, "default", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryCountOrderByAggregateInput_1.Tax_categoryCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryCountOrderByAggregateInput_1.Tax_categoryCountOrderByAggregateInput)
], Tax_categoryOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryAvgOrderByAggregateInput_1.Tax_categoryAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryAvgOrderByAggregateInput_1.Tax_categoryAvgOrderByAggregateInput)
], Tax_categoryOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMaxOrderByAggregateInput_1.Tax_categoryMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMaxOrderByAggregateInput_1.Tax_categoryMaxOrderByAggregateInput)
], Tax_categoryOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categoryMinOrderByAggregateInput_1.Tax_categoryMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categoryMinOrderByAggregateInput_1.Tax_categoryMinOrderByAggregateInput)
], Tax_categoryOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_categorySumOrderByAggregateInput_1.Tax_categorySumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_categorySumOrderByAggregateInput_1.Tax_categorySumOrderByAggregateInput)
], Tax_categoryOrderByWithAggregationInput.prototype, "_sum", void 0);
Tax_categoryOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_categoryOrderByWithAggregationInput", {
        isAbstract: true
    })
], Tax_categoryOrderByWithAggregationInput);
exports.Tax_categoryOrderByWithAggregationInput = Tax_categoryOrderByWithAggregationInput;
