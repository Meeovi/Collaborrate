"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardslidesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DashboardslidesOrderByWithAggregationInput_1 = require("../../../inputs/DashboardslidesOrderByWithAggregationInput");
const DashboardslidesScalarWhereWithAggregatesInput_1 = require("../../../inputs/DashboardslidesScalarWhereWithAggregatesInput");
const DashboardslidesWhereInput_1 = require("../../../inputs/DashboardslidesWhereInput");
const DashboardslidesScalarFieldEnum_1 = require("../../../../enums/DashboardslidesScalarFieldEnum");
let GroupByDashboardslidesArgs = class GroupByDashboardslidesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesWhereInput_1.DashboardslidesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesWhereInput_1.DashboardslidesWhereInput)
], GroupByDashboardslidesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesOrderByWithAggregationInput_1.DashboardslidesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardslidesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [DashboardslidesScalarFieldEnum_1.DashboardslidesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByDashboardslidesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DashboardslidesScalarWhereWithAggregatesInput_1.DashboardslidesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DashboardslidesScalarWhereWithAggregatesInput_1.DashboardslidesScalarWhereWithAggregatesInput)
], GroupByDashboardslidesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardslidesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByDashboardslidesArgs.prototype, "skip", void 0);
GroupByDashboardslidesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByDashboardslidesArgs);
exports.GroupByDashboardslidesArgs = GroupByDashboardslidesArgs;
