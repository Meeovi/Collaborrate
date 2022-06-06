"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCreateOrConnectWithoutProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateWithoutProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateWithoutProduct_attributeInput");
const Product_attribute_setWhereUniqueInput_1 = require("../inputs/Product_attribute_setWhereUniqueInput");
let Product_attribute_setCreateOrConnectWithoutProduct_attributeInput = class Product_attribute_setCreateOrConnectWithoutProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], Product_attribute_setCreateOrConnectWithoutProduct_attributeInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setCreateWithoutProduct_attributeInput_1.Product_attribute_setCreateWithoutProduct_attributeInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attribute_setCreateWithoutProduct_attributeInput_1.Product_attribute_setCreateWithoutProduct_attributeInput)
], Product_attribute_setCreateOrConnectWithoutProduct_attributeInput.prototype, "create", void 0);
Product_attribute_setCreateOrConnectWithoutProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setCreateOrConnectWithoutProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setCreateOrConnectWithoutProduct_attributeInput);
exports.Product_attribute_setCreateOrConnectWithoutProduct_attributeInput = Product_attribute_setCreateOrConnectWithoutProduct_attributeInput;
