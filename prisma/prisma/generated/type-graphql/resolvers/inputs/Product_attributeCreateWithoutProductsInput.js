"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateNestedManyWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateNestedManyWithoutProduct_attributeInput");
let Product_attributeCreateWithoutProductsInput = class Product_attributeCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateWithoutProductsInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateWithoutProductsInput.prototype, "used_sorting_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateNestedManyWithoutProduct_attributeInput_1.Product_attribute_setCreateNestedManyWithoutProduct_attributeInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateNestedManyWithoutProduct_attributeInput_1.Product_attribute_setCreateNestedManyWithoutProduct_attributeInput)
], Product_attributeCreateWithoutProductsInput.prototype, "product_attribute_set", void 0);
Product_attributeCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeCreateWithoutProductsInput);
exports.Product_attributeCreateWithoutProductsInput = Product_attributeCreateWithoutProductsInput;
