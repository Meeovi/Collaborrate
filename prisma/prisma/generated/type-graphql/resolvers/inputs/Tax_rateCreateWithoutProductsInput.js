"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_rateCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_rateCreateWithoutProductsInput = class Tax_rateCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "tax_identifier", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Tax_rateCreateWithoutProductsInput.prototype, "zip_post_is_range", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "postcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "rate_percent", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_rateCreateWithoutProductsInput.prototype, "default_store_view", void 0);
Tax_rateCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_rateCreateWithoutProductsInput", {
        isAbstract: true
    })
], Tax_rateCreateWithoutProductsInput);
exports.Tax_rateCreateWithoutProductsInput = Tax_rateCreateWithoutProductsInput;
