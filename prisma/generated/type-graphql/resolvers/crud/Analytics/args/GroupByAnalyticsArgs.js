"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAnalyticsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AnalyticsOrderByWithAggregationInput_1 = require("../../../inputs/AnalyticsOrderByWithAggregationInput");
const AnalyticsScalarWhereWithAggregatesInput_1 = require("../../../inputs/AnalyticsScalarWhereWithAggregatesInput");
const AnalyticsWhereInput_1 = require("../../../inputs/AnalyticsWhereInput");
const AnalyticsScalarFieldEnum_1 = require("../../../../enums/AnalyticsScalarFieldEnum");
let GroupByAnalyticsArgs = class GroupByAnalyticsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsWhereInput_1.AnalyticsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsWhereInput_1.AnalyticsWhereInput)
], GroupByAnalyticsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsOrderByWithAggregationInput_1.AnalyticsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAnalyticsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AnalyticsScalarFieldEnum_1.AnalyticsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByAnalyticsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AnalyticsScalarWhereWithAggregatesInput_1.AnalyticsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AnalyticsScalarWhereWithAggregatesInput_1.AnalyticsScalarWhereWithAggregatesInput)
], GroupByAnalyticsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAnalyticsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByAnalyticsArgs.prototype, "skip", void 0);
GroupByAnalyticsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByAnalyticsArgs);
exports.GroupByAnalyticsArgs = GroupByAnalyticsArgs;
