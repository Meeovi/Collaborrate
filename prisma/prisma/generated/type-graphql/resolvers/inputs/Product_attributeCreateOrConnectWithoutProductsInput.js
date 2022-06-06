"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateOrConnectWithoutProductsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateWithoutProductsInput_1 = require("../inputs/Product_attributeCreateWithoutProductsInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeCreateOrConnectWithoutProductsInput = class Product_attributeCreateOrConnectWithoutProductsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], Product_attributeCreateOrConnectWithoutProductsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateWithoutProductsInput_1.Product_attributeCreateWithoutProductsInput)
], Product_attributeCreateOrConnectWithoutProductsInput.prototype, "create", void 0);
Product_attributeCreateOrConnectWithoutProductsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateOrConnectWithoutProductsInput", {
        isAbstract: true
    })
], Product_attributeCreateOrConnectWithoutProductsInput);
exports.Product_attributeCreateOrConnectWithoutProductsInput = Product_attributeCreateOrConnectWithoutProductsInput;
