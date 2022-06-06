"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateNestedOneWithoutTax_rateInput_1 = require("../inputs/ProductsCreateNestedOneWithoutTax_rateInput");
let Tax_rateCreateInput = class Tax_rateCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_rateCreateInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateNestedOneWithoutTax_rateInput_1.ProductsCreateNestedOneWithoutTax_rateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateNestedOneWithoutTax_rateInput_1.ProductsCreateNestedOneWithoutTax_rateInput)
], Tax_rateCreateInput.prototype, "products", void 0);
Tax_rateCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateInput", {
        isAbstract: true
    })
], Tax_rateCreateInput);
exports.Tax_rateCreateInput = Tax_rateCreateInput;
