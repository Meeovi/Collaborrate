"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_attribute_setArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_attribute_setOrderByWithAggregationInput_1 = require("../../../inputs/Product_attribute_setOrderByWithAggregationInput");
const Product_attribute_setScalarWhereWithAggregatesInput_1 = require("../../../inputs/Product_attribute_setScalarWhereWithAggregatesInput");
const Product_attribute_setWhereInput_1 = require("../../../inputs/Product_attribute_setWhereInput");
const Product_attribute_setScalarFieldEnum_1 = require("../../../../enums/Product_attribute_setScalarFieldEnum");
let GroupByProduct_attribute_setArgs = class GroupByProduct_attribute_setArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setWhereInput_1.Product_attribute_setWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setWhereInput_1.Product_attribute_setWhereInput)
], GroupByProduct_attribute_setArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setOrderByWithAggregationInput_1.Product_attribute_setOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_attribute_setArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_attribute_setScalarFieldEnum_1.Product_attribute_setScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_attribute_setArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_attribute_setScalarWhereWithAggregatesInput_1.Product_attribute_setScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_attribute_setScalarWhereWithAggregatesInput_1.Product_attribute_setScalarWhereWithAggregatesInput)
], GroupByProduct_attribute_setArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_attribute_setArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_attribute_setArgs.prototype, "skip", void 0);
GroupByProduct_attribute_setArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProduct_attribute_setArgs);
exports.GroupByProduct_attribute_setArgs = GroupByProduct_attribute_setArgs;
