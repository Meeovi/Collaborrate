"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByDashboardslistArgs_1 = require("./args/GroupByDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const DashboardslistGroupBy_1 = require("../../outputs/DashboardslistGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDashboardslistResolver = class GroupByDashboardslistResolver {
    async groupByDashboardslist(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardslistGroupBy_1.DashboardslistGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardslistArgs_1.GroupByDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDashboardslistResolver.prototype, "groupByDashboardslist", null);
GroupByDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], GroupByDashboardslistResolver);
exports.GroupByDashboardslistResolver = GroupByDashboardslistResolver;
