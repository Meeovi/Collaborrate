"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setCreateManyProduct_attributeInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Product_attribute_setCreateManyProduct_attributeInput = class Product_attribute_setCreateManyProduct_attributeInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attribute_setCreateManyProduct_attributeInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setCreateManyProduct_attributeInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setCreateManyProduct_attributeInput.prototype, "based_on", void 0);
Product_attribute_setCreateManyProduct_attributeInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setCreateManyProduct_attributeInput", {
        isAbstract: true
    })
], Product_attribute_setCreateManyProduct_attributeInput);
exports.Product_attribute_setCreateManyProduct_attributeInput = Product_attribute_setCreateManyProduct_attributeInput;
