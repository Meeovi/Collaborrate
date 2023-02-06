"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardsOrderByWithAggregationInput_1 = require("../../../inputs/DashboardsOrderByWithAggregationInput");
const DashboardsScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardsScalarWhereWithAggregatesInput");
const DashboardsWhereInput_1 = require("../../../inputs/DashboardsWhereInput");
const DashboardsScalarFieldEnum_1 = require("../../../../enums/DashboardsScalarFieldEnum");
let GroupByDashboardsArgs = class GroupByDashboardsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsWhereInput_1.DashboardsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsWhereInput_1.DashboardsWhereInput)
], GroupByDashboardsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsOrderByWithAggregationInput_1.DashboardsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardsScalarFieldEnum_1.DashboardsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardsScalarWhereWithAggregatesInput_1.DashboardsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardsScalarWhereWithAggregatesInput_1.DashboardsScalarWhereWithAggregatesInput)
], GroupByDashboardsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardsArgs.prototype, "skip", void 0);
GroupByDashboardsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardsArgs);
exports.GroupByDashboardsArgs = GroupByDashboardsArgs;
