"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateOrConnectWithoutCredit_memosInput");
const ProductsCreateWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateWithoutCredit_memosInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutCredit_memosInput = class ProductsCreateNestedOneWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput)
], ProductsCreateNestedOneWithoutCredit_memosInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutCredit_memosInput_1.ProductsCreateOrConnectWithoutCredit_memosInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutCredit_memosInput_1.ProductsCreateOrConnectWithoutCredit_memosInput)
], ProductsCreateNestedOneWithoutCredit_memosInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutCredit_memosInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutCredit_memosInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutCredit_memosInput);
exports.ProductsCreateNestedOneWithoutCredit_memosInput = ProductsCreateNestedOneWithoutCredit_memosInput;
