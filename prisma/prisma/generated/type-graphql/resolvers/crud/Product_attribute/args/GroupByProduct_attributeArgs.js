"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_attributeArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attributeOrderByWithAggregationInput_1 = require("../../../inputs/Product_attributeOrderByWithAggregationInput");
const Product_attributeScalarWhereWithAggregatesInput_1 = require("../../../inputs/Product_attributeScalarWhereWithAggregatesInput");
const Product_attributeWhereInput_1 = require("../../../inputs/Product_attributeWhereInput");
const Product_attributeScalarFieldEnum_1 = require("../../../../enums/Product_attributeScalarFieldEnum");
let GroupByProduct_attributeArgs = class GroupByProduct_attributeArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeWhereInput_1.Product_attributeWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeWhereInput_1.Product_attributeWhereInput)
], GroupByProduct_attributeArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeOrderByWithAggregationInput_1.Product_attributeOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_attributeArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attributeScalarFieldEnum_1.Product_attributeScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_attributeArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attributeScalarWhereWithAggregatesInput_1.Product_attributeScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attributeScalarWhereWithAggregatesInput_1.Product_attributeScalarWhereWithAggregatesInput)
], GroupByProduct_attributeArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_attributeArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_attributeArgs.prototype, "skip", void 0);
GroupByProduct_attributeArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProduct_attributeArgs);
exports.GroupByProduct_attributeArgs = GroupByProduct_attributeArgs;
