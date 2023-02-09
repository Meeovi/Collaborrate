"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardsArgs_1 = require("./args/AggregateDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const AggregateDashboards_1 = require("../../outputs/AggregateDashboards");
const helpers_1 = require("../../../helpers");
let AggregateDashboardsResolver = class AggregateDashboardsResolver {
    async aggregateDashboards(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboards_1.AggregateDashboards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardsArgs_1.AggregateDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardsResolver.prototype, "aggregateDashboards", null);
AggregateDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], AggregateDashboardsResolver);
exports.AggregateDashboardsResolver = AggregateDashboardsResolver;
