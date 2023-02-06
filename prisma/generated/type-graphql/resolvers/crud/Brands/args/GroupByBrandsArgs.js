"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByBrandsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BrandsOrderByWithAggregationInput_1 = require("../../../inputs/BrandsOrderByWithAggregationInput");
const BrandsScalarWhereWithAggregatesInput_1 = require("../../../inputs/BrandsScalarWhereWithAggregatesInput");
const BrandsWhereInput_1 = require("../../../inputs/BrandsWhereInput");
const BrandsScalarFieldEnum_1 = require("../../../../enums/BrandsScalarFieldEnum");
let GroupByBrandsArgs = class GroupByBrandsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsWhereInput_1.BrandsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsWhereInput_1.BrandsWhereInput)
], GroupByBrandsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsOrderByWithAggregationInput_1.BrandsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BrandsScalarFieldEnum_1.BrandsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByBrandsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BrandsScalarWhereWithAggregatesInput_1.BrandsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BrandsScalarWhereWithAggregatesInput_1.BrandsScalarWhereWithAggregatesInput)
], GroupByBrandsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByBrandsArgs.prototype, "skip", void 0);
GroupByBrandsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByBrandsArgs);
exports.GroupByBrandsArgs = GroupByBrandsArgs;
