"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCreateManyProductsInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeCreateManyProductsInput_1 = require("../inputs/Product_attributeCreateManyProductsInput");
let Product_attributeCreateManyProductsInputEnvelope = class Product_attributeCreateManyProductsInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeCreateManyProductsInput_1.Product_attributeCreateManyProductsInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeCreateManyProductsInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], Product_attributeCreateManyProductsInputEnvelope.prototype, "skipDuplicates", void 0);
Product_attributeCreateManyProductsInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attributeCreateManyProductsInputEnvelope", {
        isAbstract: true
    })
], Product_attributeCreateManyProductsInputEnvelope);
exports.Product_attributeCreateManyProductsInputEnvelope = Product_attributeCreateManyProductsInputEnvelope;
