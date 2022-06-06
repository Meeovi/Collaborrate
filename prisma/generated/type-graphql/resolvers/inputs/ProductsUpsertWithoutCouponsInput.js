"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsUpsertWithoutCouponsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutCouponsInput_1 = require("../inputs/ProductsCreateWithoutCouponsInput");
const ProductsUpdateWithoutCouponsInput_1 = require("../inputs/ProductsUpdateWithoutCouponsInput");
let ProductsUpsertWithoutCouponsInput = class ProductsUpsertWithoutCouponsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsUpdateWithoutCouponsInput_1.ProductsUpdateWithoutCouponsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsUpdateWithoutCouponsInput_1.ProductsUpdateWithoutCouponsInput)
], ProductsUpsertWithoutCouponsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput)
], ProductsUpsertWithoutCouponsInput.prototype, "create", void 0);
ProductsUpsertWithoutCouponsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsUpsertWithoutCouponsInput", {
        isAbstract: true
    })
], ProductsUpsertWithoutCouponsInput);
exports.ProductsUpsertWithoutCouponsInput = ProductsUpsertWithoutCouponsInput;
