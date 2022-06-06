"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutQuotesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutQuotesInput_1 = require("../inputs/ProductsCreateWithoutQuotesInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutQuotesInput = class ProductsCreateOrConnectWithoutQuotesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutQuotesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutQuotesInput_1.ProductsCreateWithoutQuotesInput)
], ProductsCreateOrConnectWithoutQuotesInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutQuotesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutQuotesInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutQuotesInput);
exports.ProductsCreateOrConnectWithoutQuotesInput = ProductsCreateOrConnectWithoutQuotesInput;
