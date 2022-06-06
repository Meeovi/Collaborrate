"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutReturnsInput_1 = require("../inputs/ProductsCreateOrConnectWithoutReturnsInput");
const ProductsCreateWithoutReturnsInput_1 = require("../inputs/ProductsCreateWithoutReturnsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutReturnsInput = class ProductsCreateNestedOneWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput)
], ProductsCreateNestedOneWithoutReturnsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutReturnsInput_1.ProductsCreateOrConnectWithoutReturnsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutReturnsInput_1.ProductsCreateOrConnectWithoutReturnsInput)
], ProductsCreateNestedOneWithoutReturnsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutReturnsInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutReturnsInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutReturnsInput);
exports.ProductsCreateNestedOneWithoutReturnsInput = ProductsCreateNestedOneWithoutReturnsInput;
