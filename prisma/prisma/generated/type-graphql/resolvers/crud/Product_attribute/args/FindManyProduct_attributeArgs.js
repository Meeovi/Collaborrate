"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithRelationInput_1 = require("../../../inputs/Product_attributeOrderByWithRelationInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
const Product_attributeWhereUniqueInput_1 = require("../../../inputs/Product_attributeWhereUniqueInput");
const Product_attributeScalarFieldEnum_1 = require("../../../../enums/Product_attributeScalarFieldEnum");
let FindManyProduct_attributeArgs = class FindManyProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], FindManyProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByWithRelationInput_1.Product_attributeOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProduct_attributeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereUniqueInput_1.Product_attributeWhereUniqueInput)
], FindManyProduct_attributeArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProduct_attributeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyProduct_attributeArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum_1.Product_attributeScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyProduct_attributeArgs.prototype, "distinct", void 0);
FindManyProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyProduct_attributeArgs);
exports.FindManyProduct_attributeArgs = FindManyProduct_attributeArgs;
