"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attributeCount = class Product_attributeCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeCount.prototype, "product_attribute_set", void 0);
Product_attributeCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Product_attributeCount", {
        isAbstract: true
    })
], Product_attributeCount);
exports.Product_attributeCount = Product_attributeCount;
