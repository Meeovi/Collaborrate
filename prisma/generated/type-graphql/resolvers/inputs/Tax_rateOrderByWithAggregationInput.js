"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Tax_rateAvgOrderByAggregateInput_1 = require("../inputs/Tax_rateAvgOrderByAggregateInput");
const Tax_rateCountOrderByAggregateInput_1 = require("../inputs/Tax_rateCountOrderByAggregateInput");
const Tax_rateMaxOrderByAggregateInput_1 = require("../inputs/Tax_rateMaxOrderByAggregateInput");
const Tax_rateMinOrderByAggregateInput_1 = require("../inputs/Tax_rateMinOrderByAggregateInput");
const Tax_rateSumOrderByAggregateInput_1 = require("../inputs/Tax_rateSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Tax_rateOrderByWithAggregationInput = class Tax_rateOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateCountOrderByAggregateInput_1.Tax_rateCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateCountOrderByAggregateInput_1.Tax_rateCountOrderByAggregateInput)
], Tax_rateOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateAvgOrderByAggregateInput_1.Tax_rateAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateAvgOrderByAggregateInput_1.Tax_rateAvgOrderByAggregateInput)
], Tax_rateOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMaxOrderByAggregateInput_1.Tax_rateMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMaxOrderByAggregateInput_1.Tax_rateMaxOrderByAggregateInput)
], Tax_rateOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateMinOrderByAggregateInput_1.Tax_rateMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateMinOrderByAggregateInput_1.Tax_rateMinOrderByAggregateInput)
], Tax_rateOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Tax_rateSumOrderByAggregateInput_1.Tax_rateSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Tax_rateSumOrderByAggregateInput_1.Tax_rateSumOrderByAggregateInput)
], Tax_rateOrderByWithAggregationInput.prototype, "_sum", void 0);
Tax_rateOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateOrderByWithAggregationInput", {
        isAbstract: true
    })
], Tax_rateOrderByWithAggregationInput);
exports.Tax_rateOrderByWithAggregationInput = Tax_rateOrderByWithAggregationInput;
