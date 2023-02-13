"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AttributesAvgOrderByAggregateInput_1 = require("../inputs/AttributesAvgOrderByAggregateInput");
const AttributesCountOrderByAggregateInput_1 = require("../inputs/AttributesCountOrderByAggregateInput");
const AttributesMaxOrderByAggregateInput_1 = require("../inputs/AttributesMaxOrderByAggregateInput");
const AttributesMinOrderByAggregateInput_1 = require("../inputs/AttributesMinOrderByAggregateInput");
const AttributesSumOrderByAggregateInput_1 = require("../inputs/AttributesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let AttributesOrderByWithAggregationInput = class AttributesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "attribute_class", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "attribute_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "faceted_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "isPublic", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "meta_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "meta_url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "product_attribute_set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AttributesOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesCountOrderByAggregateInput_1.AttributesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesCountOrderByAggregateInput_1.AttributesCountOrderByAggregateInput)
], AttributesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesAvgOrderByAggregateInput_1.AttributesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesAvgOrderByAggregateInput_1.AttributesAvgOrderByAggregateInput)
], AttributesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMaxOrderByAggregateInput_1.AttributesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMaxOrderByAggregateInput_1.AttributesMaxOrderByAggregateInput)
], AttributesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesMinOrderByAggregateInput_1.AttributesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesMinOrderByAggregateInput_1.AttributesMinOrderByAggregateInput)
], AttributesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AttributesSumOrderByAggregateInput_1.AttributesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AttributesSumOrderByAggregateInput_1.AttributesSumOrderByAggregateInput)
], AttributesOrderByWithAggregationInput.prototype, "_sum", void 0);
AttributesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AttributesOrderByWithAggregationInput", {
        isAbstract: true
    })
], AttributesOrderByWithAggregationInput);
exports.AttributesOrderByWithAggregationInput = AttributesOrderByWithAggregationInput;
