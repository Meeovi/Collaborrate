"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateWithoutCredit_memosInput");
const ProductsUpdateWithoutCredit_memosInput_1 = require("../inputs/ProductsUpdateWithoutCredit_memosInput");
let ProductsUpsertWithoutCredit_memosInput = class ProductsUpsertWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutCredit_memosInput_1.ProductsUpdateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutCredit_memosInput_1.ProductsUpdateWithoutCredit_memosInput)
], ProductsUpsertWithoutCredit_memosInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput)
], ProductsUpsertWithoutCredit_memosInput.prototype, "create", void 0);
ProductsUpsertWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutCredit_memosInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutCredit_memosInput);
exports.ProductsUpsertWithoutCredit_memosInput = ProductsUpsertWithoutCredit_memosInput;
