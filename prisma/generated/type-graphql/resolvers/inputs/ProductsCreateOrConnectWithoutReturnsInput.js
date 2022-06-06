"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutReturnsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutReturnsInput_1 = require("../inputs/ProductsCreateWithoutReturnsInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutReturnsInput = class ProductsCreateOrConnectWithoutReturnsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutReturnsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutReturnsInput_1.ProductsCreateWithoutReturnsInput)
], ProductsCreateOrConnectWithoutReturnsInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutReturnsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutReturnsInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutReturnsInput);
exports.ProductsCreateOrConnectWithoutReturnsInput = ProductsCreateOrConnectWithoutReturnsInput;
