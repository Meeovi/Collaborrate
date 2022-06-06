"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeUpsertWithoutProduct_attribute_setInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateWithoutProduct_attribute_setInput_1 = require("../inputs/Product_attributeCreateWithoutProduct_attribute_setInput");
const Product_attributeUpdateWithoutProduct_attribute_setInput_1 = require("../inputs/Product_attributeUpdateWithoutProduct_attribute_setInput");
let Product_attributeUpsertWithoutProduct_attribute_setInput = class Product_attributeUpsertWithoutProduct_attribute_setInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeUpdateWithoutProduct_attribute_setInput_1.Product_attributeUpdateWithoutProduct_attribute_setInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeUpdateWithoutProduct_attribute_setInput_1.Product_attributeUpdateWithoutProduct_attribute_setInput)
], Product_attributeUpsertWithoutProduct_attribute_setInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeCreateWithoutProduct_attribute_setInput_1.Product_attributeCreateWithoutProduct_attribute_setInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Product_attributeCreateWithoutProduct_attribute_setInput_1.Product_attributeCreateWithoutProduct_attribute_setInput)
], Product_attributeUpsertWithoutProduct_attribute_setInput.prototype, "create", void 0);
Product_attributeUpsertWithoutProduct_attribute_setInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeUpsertWithoutProduct_attribute_setInput", {
        isAbstract: true
    })
], Product_attributeUpsertWithoutProduct_attribute_setInput);
exports.Product_attributeUpsertWithoutProduct_attribute_setInput = Product_attributeUpsertWithoutProduct_attribute_setInput;
