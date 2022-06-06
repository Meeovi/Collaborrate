"use strict";
var Product_attribute_setWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attribute_setWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const Product_attributeRelationFilter_1 = require("../inputs/Product_attributeRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableFilter_1 = require("../inputs/StringNullableFilter");
let Product_attribute_setWhereInput = Product_attribute_setWhereInput_1 = class Product_attribute_setWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attribute_setWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Product_attribute_setWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Product_attribute_setWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableFilter_1.StringNullableFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableFilter_1.StringNullableFilter)
], Product_attribute_setWhereInput.prototype, "based_on", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Product_attribute_setWhereInput.prototype, "attribute_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeRelationFilter_1.Product_attributeRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeRelationFilter_1.Product_attributeRelationFilter)
], Product_attribute_setWhereInput.prototype, "product_attribute", void 0);
Product_attribute_setWhereInput = Product_attribute_setWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Product_attribute_setWhereInput", {
        isAbstract: true
    })
], Product_attribute_setWhereInput);
exports.Product_attribute_setWhereInput = Product_attribute_setWhereInput;
