"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardslistArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslistOrderByWithAggregationInput_1 = require("../../../inputs/DashboardslistOrderByWithAggregationInput");
const DashboardslistScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardslistScalarWhereWithAggregatesInput");
const DashboardslistWhereInput_1 = require("../../../inputs/DashboardslistWhereInput");
const DashboardslistScalarFieldEnum_1 = require("../../../../enums/DashboardslistScalarFieldEnum");
let GroupByDashboardslistArgs = class GroupByDashboardslistArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistWhereInput_1.DashboardslistWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistWhereInput_1.DashboardslistWhereInput)
], GroupByDashboardslistArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistOrderByWithAggregationInput_1.DashboardslistOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardslistArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslistScalarFieldEnum_1.DashboardslistScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardslistArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslistScalarWhereWithAggregatesInput_1.DashboardslistScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslistScalarWhereWithAggregatesInput_1.DashboardslistScalarWhereWithAggregatesInput)
], GroupByDashboardslistArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardslistArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardslistArgs.prototype, "skip", void 0);
GroupByDashboardslistArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardslistArgs);
exports.GroupByDashboardslistArgs = GroupByDashboardslistArgs;
