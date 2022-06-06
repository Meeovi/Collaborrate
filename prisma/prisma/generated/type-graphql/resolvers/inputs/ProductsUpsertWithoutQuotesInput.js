"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutQuotesInput_1 = require("../inputs/ProductsCreateWithoutQuotesInput");
const ProductsUpdateWithoutQuotesInput_1 = require("../inputs/ProductsUpdateWithoutQuotesInput");
let ProductsUpsertWithoutQuotesInput = class ProductsUpsertWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutQuotesInput_1.ProductsUpdateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutQuotesInput_1.ProductsUpdateWithoutQuotesInput)
], ProductsUpsertWithoutQuotesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput)
], ProductsUpsertWithoutQuotesInput.prototype, "create", void 0);
ProductsUpsertWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutQuotesInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutQuotesInput);
exports.ProductsUpsertWithoutQuotesInput = ProductsUpsertWithoutQuotesInput;
