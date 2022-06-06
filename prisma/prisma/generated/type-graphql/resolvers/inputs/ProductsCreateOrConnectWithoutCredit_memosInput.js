"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutCredit_memosInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutCredit_memosInput_1 = require("../inputs/ProductsCreateWithoutCredit_memosInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutCredit_memosInput = class ProductsCreateOrConnectWithoutCredit_memosInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutCredit_memosInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutCredit_memosInput_1.ProductsCreateWithoutCredit_memosInput)
], ProductsCreateOrConnectWithoutCredit_memosInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutCredit_memosInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutCredit_memosInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutCredit_memosInput);
exports.ProductsCreateOrConnectWithoutCredit_memosInput = ProductsCreateOrConnectWithoutCredit_memosInput;
