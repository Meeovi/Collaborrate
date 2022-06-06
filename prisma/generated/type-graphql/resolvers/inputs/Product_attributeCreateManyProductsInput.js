"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attributeCreateManyProductsInput = class Product_attributeCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "default_label", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "catalog_input_type_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "values_required", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "attribute_code", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "scope", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "unique_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "input_validation_store_owner", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "add_column_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "filter_options", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "use_search", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "comparable_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "search_results_layered_navigation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attributeCreateManyProductsInput.prototype, "position", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "promo_rule_conditions", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "allow_html_tags_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "visible_catalog_pages_storefront", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "used_product_listing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInput.prototype, "used_sorting_product_listing", void 0);
Product_attributeCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateManyProductsInput", {
        isAbstract: true
    })
], Product_attributeCreateManyProductsInput);
exports.Product_attributeCreateManyProductsInput = Product_attributeCreateManyProductsInput;
