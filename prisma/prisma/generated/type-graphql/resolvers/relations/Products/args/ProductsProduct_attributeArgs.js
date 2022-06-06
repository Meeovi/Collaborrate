"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithRelationInput_1 = require("../../../inputs/Product_attributeOrderByWithRelationInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
const Product_attributeScalarFieldEnum_1 = require("../../../../enums/Product_attributeScalarFieldEnum");
let ProductsProduct_attributeArgs = class ProductsProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], ProductsProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationInput_1.Product_attributeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsProduct_attributeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], ProductsProduct_attributeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsProduct_attributeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductsProduct_attributeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum_1.Product_attributeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ProductsProduct_attributeArgs.prototype, "distinct", void 0);
ProductsProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ProductsProduct_attributeArgs);
exports.ProductsProduct_attributeArgs = ProductsProduct_attributeArgs;
