"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByProduct_typesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Product_typesOrderByWithAggregationInput_1 = require("../../../inputs/Product_typesOrderByWithAggregationInput");
const Product_typesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Product_typesScalarWhereWithAggregatesInput");
const Product_typesWhereInput_1 = require("../../../inputs/Product_typesWhereInput");
const Product_typesScalarFieldEnum_1 = require("../../../../enums/Product_typesScalarFieldEnum");
let GroupByProduct_typesArgs = class GroupByProduct_typesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesWhereInput_1.Product_typesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesWhereInput_1.Product_typesWhereInput)
], GroupByProduct_typesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesOrderByWithAggregationInput_1.Product_typesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_typesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Product_typesScalarFieldEnum_1.Product_typesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByProduct_typesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Product_typesScalarWhereWithAggregatesInput_1.Product_typesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Product_typesScalarWhereWithAggregatesInput_1.Product_typesScalarWhereWithAggregatesInput)
], GroupByProduct_typesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_typesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByProduct_typesArgs.prototype, "skip", void 0);
GroupByProduct_typesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByProduct_typesArgs);
exports.GroupByProduct_typesArgs = GroupByProduct_typesArgs;
