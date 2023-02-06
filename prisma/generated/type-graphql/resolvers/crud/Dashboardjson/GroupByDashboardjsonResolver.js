"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByDashboardjsonArgs_1 = require("./args/GroupByDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const DashboardjsonGroupBy_1 = require("../../outputs/DashboardjsonGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByDashboardjsonResolver = class GroupByDashboardjsonResolver {
    async groupByDashboardjson(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DashboardjsonGroupBy_1.DashboardjsonGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDashboardjsonArgs_1.GroupByDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByDashboardjsonResolver.prototype, "groupByDashboardjson", null);
GroupByDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], GroupByDashboardjsonResolver);
exports.GroupByDashboardjsonResolver = GroupByDashboardjsonResolver;
