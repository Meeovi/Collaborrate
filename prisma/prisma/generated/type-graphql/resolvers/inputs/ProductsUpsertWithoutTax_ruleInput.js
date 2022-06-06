"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutTax_ruleInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutTax_ruleInput_1 = require("../inputs/ProductsCreateWithoutTax_ruleInput");
const ProductsUpdateWithoutTax_ruleInput_1 = require("../inputs/ProductsUpdateWithoutTax_ruleInput");
let ProductsUpsertWithoutTax_ruleInput = class ProductsUpsertWithoutTax_ruleInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_ruleInput_1.ProductsUpdateWithoutTax_ruleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutTax_ruleInput_1.ProductsUpdateWithoutTax_ruleInput)
], ProductsUpsertWithoutTax_ruleInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_ruleInput_1.ProductsCreateWithoutTax_ruleInput)
], ProductsUpsertWithoutTax_ruleInput.prototype, "create", void 0);
ProductsUpsertWithoutTax_ruleInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutTax_ruleInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutTax_ruleInput);
exports.ProductsUpsertWithoutTax_ruleInput = ProductsUpsertWithoutTax_ruleInput;
