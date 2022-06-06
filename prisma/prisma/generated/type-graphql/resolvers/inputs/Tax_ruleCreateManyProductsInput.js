"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax_ruleCreateManyProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Tax_ruleCreateManyProductsInput = class Tax_ruleCreateManyProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Tax_ruleCreateManyProductsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateManyProductsInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Tax_ruleCreateManyProductsInput.prototype, "tax_rate", void 0);
Tax_ruleCreateManyProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Tax_ruleCreateManyProductsInput", {
        isAbstract: true
    })
], Tax_ruleCreateManyProductsInput);
exports.Tax_ruleCreateManyProductsInput = Tax_ruleCreateManyProductsInput;
