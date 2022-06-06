"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutReturnsInput_1 = require("../inputs/ProductsCreateWithoutReturnsInput");
const ProductsUpdateWithoutReturnsInput_1 = require("../inputs/ProductsUpdateWithoutReturnsInput");
let ProductsUpsertWithoutReturnsInput = class ProductsUpsertWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutReturnsInput_1.ProductsUpdateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutReturnsInput_1.ProductsUpdateWithoutReturnsInput)
], ProductsUpsertWithoutReturnsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput)
], ProductsUpsertWithoutReturnsInput.prototype, "create", void 0);
ProductsUpsertWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutReturnsInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutReturnsInput);
exports.ProductsUpsertWithoutReturnsInput = ProductsUpsertWithoutReturnsInput;
