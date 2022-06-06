"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateNestedOneWithoutProduct_attribute_setInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateOrConnectWithoutProduct_attribute_setInput_1 = require("../inputs/Product_attributeCreateOrConnectWithoutProduct_attribute_setInput");
const Product_attributeCreateWithoutProduct_attribute_setInput_1 = require("../inputs/Product_attributeCreateWithoutProduct_attribute_setInput");
const Product_attributeWhereUniqueInput_1 = require("../inputs/Product_attributeWhereUniqueInput");
let Product_attributeCreateNestedOneWithoutProduct_attribute_setInput = class Product_attributeCreateNestedOneWithoutProduct_attribute_setInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateWithoutProduct_attribute_setInput_1.Product_attributeCreateWithoutProduct_attribute_setInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateWithoutProduct_attribute_setInput_1.Product_attributeCreateWithoutProduct_attribute_setInput)
], Product_attributeCreateNestedOneWithoutProduct_attribute_setInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateOrConnectWithoutProduct_attribute_setInput_1.Product_attributeCreateOrConnectWithoutProduct_attribute_setInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateOrConnectWithoutProduct_attribute_setInput_1.Product_attributeCreateOrConnectWithoutProduct_attribute_setInput)
], Product_attributeCreateNestedOneWithoutProduct_attribute_setInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], Product_attributeCreateNestedOneWithoutProduct_attribute_setInput.prototype, "connect", void 0);
Product_attributeCreateNestedOneWithoutProduct_attribute_setInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateNestedOneWithoutProduct_attribute_setInput", {
        isAbstract: true
    })
], Product_attributeCreateNestedOneWithoutProduct_attribute_setInput);
exports.Product_attributeCreateNestedOneWithoutProduct_attribute_setInput = Product_attributeCreateNestedOneWithoutProduct_attribute_setInput;
