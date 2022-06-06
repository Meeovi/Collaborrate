"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithRelationInput_1 = require("../inputs/Product_attributeOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Product_attribute_setOrderByWithRelationInput = class Product_attribute_setOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Product_attribute_setOrderByWithRelationInput.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeOrderByWithRelationInput_1.Product_attributeOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeOrderByWithRelationInput_1.Product_attributeOrderByWithRelationInput)
], Product_attribute_setOrderByWithRelationInput.prototype, "product_attribute", void 0);
Product_attribute_setOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setOrderByWithRelationInput", {
        isAbstract: true
    })
], Product_attribute_setOrderByWithRelationInput);
exports.Product_attribute_setOrderByWithRelationInput = Product_attribute_setOrderByWithRelationInput;
