"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByRelationAggregateInput_1 = require("../inputs/Product_attribute_setOrderByRelationAggregateInput");
const ProductsOrderByWithRelationInput_1 = require("../inputs/ProductsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attributeOrderByWithRelationInput = class Product_attributeOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeOrderByWithRelationInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsOrderByWithRelationInput_1.ProductsOrderByWithRelationInput)
], Product_attributeOrderByWithRelationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setOrderByRelationAggregateInput_1.Product_attribute_setOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setOrderByRelationAggregateInput_1.Product_attribute_setOrderByRelationAggregateInput)
], Product_attributeOrderByWithRelationInput.prototype, "product_attribute_set", void 0);
Product_attributeOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeOrderByWithRelationInput", {
        isAbstract: true
    })
], Product_attributeOrderByWithRelationInput);
exports.Product_attributeOrderByWithRelationInput = Product_attributeOrderByWithRelationInput;
