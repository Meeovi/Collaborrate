"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardgraphqlArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardgraphqlOrderByWithAggregationInput_1 = require("../../../inputs/DashboardgraphqlOrderByWithAggregationInput");
const DashboardgraphqlScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardgraphqlScalarWhereWithAggregatesInput");
const DashboardgraphqlWhereInput_1 = require("../../../inputs/DashboardgraphqlWhereInput");
const DashboardgraphqlScalarFieldEnum_1 = require("../../../../enums/DashboardgraphqlScalarFieldEnum");
let GroupByDashboardgraphqlArgs = class GroupByDashboardgraphqlArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlWhereInput_1.DashboardgraphqlWhereInput)
], GroupByDashboardgraphqlArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlOrderByWithAggregationInput_1.DashboardgraphqlOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardgraphqlArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardgraphqlScalarFieldEnum_1.DashboardgraphqlScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardgraphqlArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardgraphqlScalarWhereWithAggregatesInput_1.DashboardgraphqlScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardgraphqlScalarWhereWithAggregatesInput_1.DashboardgraphqlScalarWhereWithAggregatesInput)
], GroupByDashboardgraphqlArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardgraphqlArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardgraphqlArgs.prototype, "skip", void 0);
GroupByDashboardgraphqlArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardgraphqlArgs);
exports.GroupByDashboardgraphqlArgs = GroupByDashboardgraphqlArgs;
