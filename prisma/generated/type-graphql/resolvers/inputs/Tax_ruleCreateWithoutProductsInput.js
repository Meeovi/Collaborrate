"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_ruleCreateWithoutProductsInput = class Tax_ruleCreateWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateWithoutProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateWithoutProductsInput.prototype, "tax_rate", void 0);
Tax_ruleCreateWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateWithoutProductsInput", {
        isAbstract: true
    })
], Tax_ruleCreateWithoutProductsInput);
exports.Tax_ruleCreateWithoutProductsInput = Tax_ruleCreateWithoutProductsInput;
