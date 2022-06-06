"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutCouponsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutCouponsInput_1 = require("../inputs/ProductsCreateOrConnectWithoutCouponsInput");
const ProductsCreateWithoutCouponsInput_1 = require("../inputs/ProductsCreateWithoutCouponsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutCouponsInput = class ProductsCreateNestedOneWithoutCouponsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCouponsInput_1.ProductsCreateWithoutCouponsInput)
], ProductsCreateNestedOneWithoutCouponsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCouponsInput_1.ProductsCreateOrConnectWithoutCouponsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutCouponsInput_1.ProductsCreateOrConnectWithoutCouponsInput)
], ProductsCreateNestedOneWithoutCouponsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutCouponsInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutCouponsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutCouponsInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutCouponsInput);
exports.ProductsCreateNestedOneWithoutCouponsInput = ProductsCreateNestedOneWithoutCouponsInput;
