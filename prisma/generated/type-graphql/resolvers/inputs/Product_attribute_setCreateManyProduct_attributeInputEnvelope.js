"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCreateManyProduct_attributeInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setCreateManyProduct_attributeInput_1 = require("../inputs/Product_attribute_setCreateManyProduct_attributeInput");
let Product_attribute_setCreateManyProduct_attributeInputEnvelope = class Product_attribute_setCreateManyProduct_attributeInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setCreateManyProduct_attributeInput_1.Product_attribute_setCreateManyProduct_attributeInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setCreateManyProduct_attributeInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attribute_setCreateManyProduct_attributeInputEnvelope.prototype, "skipDuplicates", void 0);
Product_attribute_setCreateManyProduct_attributeInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setCreateManyProduct_attributeInputEnvelope", {
        isAbstract: true
    })
], Product_attribute_setCreateManyProduct_attributeInputEnvelope);
exports.Product_attribute_setCreateManyProduct_attributeInputEnvelope = Product_attribute_setCreateManyProduct_attributeInputEnvelope;
