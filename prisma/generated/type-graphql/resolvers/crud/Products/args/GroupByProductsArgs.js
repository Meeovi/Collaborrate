"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProductsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductsOrderByWithAggregationInput_1 = require("../../../inputs/ProductsOrderByWithAggregationInput");
const ProductsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ProductsScalarWhereWithAggregatesInput");
const ProductsWhereInput_1 = require("../../../inputs/ProductsWhereInput");
const ProductsScalarFieldEnum_1 = require("../../../../enums/ProductsScalarFieldEnum");
let GroupByProductsArgs = class GroupByProductsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsWhereInput_1.ProductsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsWhereInput_1.ProductsWhereInput)
], GroupByProductsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsOrderByWithAggregationInput_1.ProductsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ProductsScalarFieldEnum_1.ProductsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProductsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductsScalarWhereWithAggregatesInput_1.ProductsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductsScalarWhereWithAggregatesInput_1.ProductsScalarWhereWithAggregatesInput)
], GroupByProductsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProductsArgs.prototype, "skip", void 0);
GroupByProductsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProductsArgs);
exports.GroupByProductsArgs = GroupByProductsArgs;
