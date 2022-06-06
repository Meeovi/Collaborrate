"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_rateCreateManyProductsInput = class Tax_rateCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_rateCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_rateCreateManyProductsInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateManyProductsInput.prototype, "default_store_view", void 0);
Tax_rateCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateManyProductsInput", {
        isAbstract: true
    })
], Tax_rateCreateManyProductsInput);
exports.Tax_rateCreateManyProductsInput = Tax_rateCreateManyProductsInput;
