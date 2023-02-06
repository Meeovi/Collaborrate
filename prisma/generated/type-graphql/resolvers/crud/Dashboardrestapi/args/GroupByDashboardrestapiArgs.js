"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardrestapiArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardrestapiOrderByWithAggregationInput_1 = require("../../../inputs/DashboardrestapiOrderByWithAggregationInput");
const DashboardrestapiScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardrestapiScalarWhereWithAggregatesInput");
const DashboardrestapiWhereInput_1 = require("../../../inputs/DashboardrestapiWhereInput");
const DashboardrestapiScalarFieldEnum_1 = require("../../../../enums/DashboardrestapiScalarFieldEnum");
let GroupByDashboardrestapiArgs = class GroupByDashboardrestapiArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiWhereInput_1.DashboardrestapiWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiWhereInput_1.DashboardrestapiWhereInput)
], GroupByDashboardrestapiArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiOrderByWithAggregationInput_1.DashboardrestapiOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardrestapiArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardrestapiScalarFieldEnum_1.DashboardrestapiScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardrestapiArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardrestapiScalarWhereWithAggregatesInput_1.DashboardrestapiScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardrestapiScalarWhereWithAggregatesInput_1.DashboardrestapiScalarWhereWithAggregatesInput)
], GroupByDashboardrestapiArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardrestapiArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardrestapiArgs.prototype, "skip", void 0);
GroupByDashboardrestapiArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardrestapiArgs);
exports.GroupByDashboardrestapiArgs = GroupByDashboardrestapiArgs;
