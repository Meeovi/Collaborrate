"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeAvgOrderByAggregateInput_1 = require("../inputs/Product_attributeAvgOrderByAggregateInput");
const Product_attributeCountOrderByAggregateInput_1 = require("../inputs/Product_attributeCountOrderByAggregateInput");
const Product_attributeMaxOrderByAggregateInput_1 = require("../inputs/Product_attributeMaxOrderByAggregateInput");
const Product_attributeMinOrderByAggregateInput_1 = require("../inputs/Product_attributeMinOrderByAggregateInput");
const Product_attributeSumOrderByAggregateInput_1 = require("../inputs/Product_attributeSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeOrderByWithAggregationInput = class Product_attributeOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithAggregationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCountOrderByAggregateInput_1.Product_attributeCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCountOrderByAggregateInput_1.Product_attributeCountOrderByAggregateInput)
], Product_attributeOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeAvgOrderByAggregateInput_1.Product_attributeAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeAvgOrderByAggregateInput_1.Product_attributeAvgOrderByAggregateInput)
], Product_attributeOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMaxOrderByAggregateInput_1.Product_attributeMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMaxOrderByAggregateInput_1.Product_attributeMaxOrderByAggregateInput)
], Product_attributeOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeMinOrderByAggregateInput_1.Product_attributeMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeMinOrderByAggregateInput_1.Product_attributeMinOrderByAggregateInput)
], Product_attributeOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeSumOrderByAggregateInput_1.Product_attributeSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeSumOrderByAggregateInput_1.Product_attributeSumOrderByAggregateInput)
], Product_attributeOrderByWithAggregationInput.prototype, "_sum", void 0);
Product_attributeOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeOrderByWithAggregationInput", {
        isAbstract: true
    })
], Product_attributeOrderByWithAggregationInput);
exports.Product_attributeOrderByWithAggregationInput = Product_attributeOrderByWithAggregationInput;
