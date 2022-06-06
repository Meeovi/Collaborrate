"use strict";
var Product_attributeWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BigIntFilter_1 = require("../inputs/BigIntFilter");
const BoolNullableFilter_1 = require("../inputs/BoolNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const Product_attribute_setListRelationFilter_1 = require("../inputs/Product_attribute_setListRelationFilter");
const ProductsRelationFilter_1 = require("../inputs/ProductsRelationFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Product_attributeWhereInput = Product_attributeWhereInput_1 = class Product_attributeWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Product_attributeWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attributeWhereInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolNullableFilter_1.BoolNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolNullableFilter_1.BoolNullableFilter)
], Product_attributeWhereInput.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BigIntFilter_1.BigIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BigIntFilter_1.BigIntFilter)
], Product_attributeWhereInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsRelationFilter_1.ProductsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsRelationFilter_1.ProductsRelationFilter)
], Product_attributeWhereInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setListRelationFilter_1.Product_attribute_setListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setListRelationFilter_1.Product_attribute_setListRelationFilter)
], Product_attributeWhereInput.prototype, "product_attribute_set", void 0);
Product_attributeWhereInput = Product_attributeWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeWhereInput", {
        isAbstract: true
    })
], Product_attributeWhereInput);
exports.Product_attributeWhereInput = Product_attributeWhereInput;
