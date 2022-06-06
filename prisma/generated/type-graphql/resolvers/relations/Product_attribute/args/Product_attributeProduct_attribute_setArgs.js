"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_attributeProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByWithRelationInput_1 = require("../../../inputs/Product_attribute_setOrderByWithRelationInput");
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
const Product_attribute_setWhereUniqueInput_1 = require("../../../inputs/Product_attribute_setWhereUniqueInput");
const Product_attribute_setScalarFieldEnum_1 = require("../../../../enums/Product_attribute_setScalarFieldEnum");
let Product_attributeProduct_attribute_setArgs = class Product_attributeProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], Product_attributeProduct_attribute_setArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithRelationInput_1.Product_attribute_setOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeProduct_attribute_setArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereUniqueInput_1.Product_attribute_setWhereUniqueInput)
], Product_attributeProduct_attribute_setArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeProduct_attribute_setArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Product_attributeProduct_attribute_setArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setScalarFieldEnum_1.Product_attribute_setScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Product_attributeProduct_attribute_setArgs.prototype, "distinct", void 0);
Product_attributeProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], Product_attributeProduct_attribute_setArgs);
exports.Product_attributeProduct_attribute_setArgs = Product_attributeProduct_attribute_setArgs;
