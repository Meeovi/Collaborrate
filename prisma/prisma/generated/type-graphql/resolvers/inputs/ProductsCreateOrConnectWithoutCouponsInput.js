"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutCouponsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutCouponsInput_1 = require("../inputs/ProductsCreateWithoutCouponsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutCouponsInput = class ProductsCreateOrConnectWithoutCouponsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutCouponsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput)
], ProductsCreateOrConnectWithoutCouponsInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutCouponsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutCouponsInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutCouponsInput);
exports.ProductsCreateOrConnectWithoutCouponsInput = ProductsCreateOrConnectWithoutCouponsInput;
