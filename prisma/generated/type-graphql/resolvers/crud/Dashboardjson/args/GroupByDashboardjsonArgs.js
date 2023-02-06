"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardjsonArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardjsonOrderByWithAggregationInput_1 = require("../../../inputs/DashboardjsonOrderByWithAggregationInput");
const DashboardjsonScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardjsonScalarWhereWithAggregatesInput");
const DashboardjsonWhereInput_1 = require("../../../inputs/DashboardjsonWhereInput");
const DashboardjsonScalarFieldEnum_1 = require("../../../../enums/DashboardjsonScalarFieldEnum");
let GroupByDashboardjsonArgs = class GroupByDashboardjsonArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonWhereInput_1.DashboardjsonWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonWhereInput_1.DashboardjsonWhereInput)
], GroupByDashboardjsonArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonOrderByWithAggregationInput_1.DashboardjsonOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardjsonArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardjsonScalarFieldEnum_1.DashboardjsonScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardjsonArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardjsonScalarWhereWithAggregatesInput_1.DashboardjsonScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardjsonScalarWhereWithAggregatesInput_1.DashboardjsonScalarWhereWithAggregatesInput)
], GroupByDashboardjsonArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardjsonArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardjsonArgs.prototype, "skip", void 0);
GroupByDashboardjsonArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardjsonArgs);
exports.GroupByDashboardjsonArgs = GroupByDashboardjsonArgs;
