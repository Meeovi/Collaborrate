"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatisticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StatisticsOrderByWithAggregationInput_1 = require("../../../inputs/StatisticsOrderByWithAggregationInput");
const StatisticsScalarWhereWithAggregatesInput_1 = require("../../../inputs/StatisticsScalarWhereWithAggregatesInput");
const StatisticsWhereInput_1 = require("../../../inputs/StatisticsWhereInput");
const StatisticsScalarFieldEnum_1 = require("../../../../enums/StatisticsScalarFieldEnum");
let GroupByStatisticsArgs = class GroupByStatisticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsWhereInput_1.StatisticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsWhereInput_1.StatisticsWhereInput)
], GroupByStatisticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsOrderByWithAggregationInput_1.StatisticsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatisticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StatisticsScalarFieldEnum_1.StatisticsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStatisticsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StatisticsScalarWhereWithAggregatesInput_1.StatisticsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StatisticsScalarWhereWithAggregatesInput_1.StatisticsScalarWhereWithAggregatesInput)
], GroupByStatisticsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatisticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStatisticsArgs.prototype, "skip", void 0);
GroupByStatisticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStatisticsArgs);
exports.GroupByStatisticsArgs = GroupByStatisticsArgs;
