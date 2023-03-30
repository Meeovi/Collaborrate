"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByDashboardrestapiArgs_1 = require("./args/GroupByDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const DashboardrestapiGroupBy_1 = require("../../outputs/DashboardrestapiGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDashboardrestapiResolver = class GroupByDashboardrestapiResolver {
    async groupByDashboardrestapi(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardrestapiGroupBy_1.DashboardrestapiGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardrestapiArgs_1.GroupByDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDashboardrestapiResolver.prototype, "groupByDashboardrestapi", null);
GroupByDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], GroupByDashboardrestapiResolver);
exports.GroupByDashboardrestapiResolver = GroupByDashboardrestapiResolver;
