"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardgraphqlResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardgraphqlArgs_1 = require("./args/AggregateDashboardgraphqlArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const AggregateDashboardgraphql_1 = require("../../outputs/AggregateDashboardgraphql");
const helpers_1 = require("../../../helpers");
let AggregateDashboardgraphqlResolver = class AggregateDashboardgraphqlResolver {
    async aggregateDashboardgraphql(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardgraphql_1.AggregateDashboardgraphql, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardgraphqlArgs_1.AggregateDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardgraphqlResolver.prototype, "aggregateDashboardgraphql", null);
AggregateDashboardgraphqlResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], AggregateDashboardgraphqlResolver);
exports.AggregateDashboardgraphqlResolver = AggregateDashboardgraphqlResolver;
