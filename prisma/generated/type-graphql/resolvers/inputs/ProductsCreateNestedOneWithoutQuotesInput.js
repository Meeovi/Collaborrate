"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateNestedOneWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateOrConnectWithoutQuotesInput_1 = require("../inputs/ProductsCreateOrConnectWithoutQuotesInput");
const ProductsCreateWithoutQuotesInput_1 = require("../inputs/ProductsCreateWithoutQuotesInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateNestedOneWithoutQuotesInput = class ProductsCreateNestedOneWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput)
], ProductsCreateNestedOneWithoutQuotesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutQuotesInput_1.ProductsCreateOrConnectWithoutQuotesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsCreateOrConnectWithoutQuotesInput_1.ProductsCreateOrConnectWithoutQuotesInput)
], ProductsCreateNestedOneWithoutQuotesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateNestedOneWithoutQuotesInput.prototype, "connect", void 0);
ProductsCreateNestedOneWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateNestedOneWithoutQuotesInput", {
        isAbstract: true
    })
], ProductsCreateNestedOneWithoutQuotesInput);
exports.ProductsCreateNestedOneWithoutQuotesInput = ProductsCreateNestedOneWithoutQuotesInput;
