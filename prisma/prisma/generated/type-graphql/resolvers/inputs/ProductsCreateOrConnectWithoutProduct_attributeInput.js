"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsCreateOrConnectWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsCreateWithoutProduct_attributeInput_1 = require("../inputs/ProductsCreateWithoutProduct_attributeInput");
const ProductsWhereUniqueInput_1 = require("../inputs/ProductsWhereUniqueInput");
let ProductsCreateOrConnectWithoutProduct_attributeInput = class ProductsCreateOrConnectWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereUniqueInput_1.ProductsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsWhereUniqueInput_1.ProductsWhereUniqueInput)
], ProductsCreateOrConnectWithoutProduct_attributeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductsCreateWithoutProduct_attributeInput_1.ProductsCreateWithoutProduct_attributeInput)
], ProductsCreateOrConnectWithoutProduct_attributeInput.prototype, "create", void 0);
ProductsCreateOrConnectWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductsCreateOrConnectWithoutProduct_attributeInput", {
        isAbstract: true
    })
], ProductsCreateOrConnectWithoutProduct_attributeInput);
exports.ProductsCreateOrConnectWithoutProduct_attributeInput = ProductsCreateOrConnectWithoutProduct_attributeInput;
