"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardsArgs_1 = require("./args/FindFirstDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardsResolver = class FindFirstDashboardsResolver {
    async findFirstDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardsArgs_1.FindFirstDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardsResolver.prototype, "findFirstDashboards", null);
FindFirstDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], FindFirstDashboardsResolver);
exports.FindFirstDashboardsResolver = FindFirstDashboardsResolver;
