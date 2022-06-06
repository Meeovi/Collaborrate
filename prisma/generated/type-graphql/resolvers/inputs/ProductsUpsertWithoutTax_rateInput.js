"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutTax_rateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutTax_rateInput_1 = require("../inputs/ProductsCreateWithoutTax_rateInput");
const ProductsUpdateWithoutTax_rateInput_1 = require("../inputs/ProductsUpdateWithoutTax_rateInput");
let ProductsUpsertWithoutTax_rateInput = class ProductsUpsertWithoutTax_rateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutTax_rateInput_1.ProductsUpdateWithoutTax_rateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutTax_rateInput_1.ProductsUpdateWithoutTax_rateInput)
], ProductsUpsertWithoutTax_rateInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutTax_rateInput_1.ProductsCreateWithoutTax_rateInput)
], ProductsUpsertWithoutTax_rateInput.prototype, "create", void 0);
ProductsUpsertWithoutTax_rateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutTax_rateInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutTax_rateInput);
exports.ProductsUpsertWithoutTax_rateInput = ProductsUpsertWithoutTax_rateInput;
