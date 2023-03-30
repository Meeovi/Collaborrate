"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardgraphqlOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardgraphqlOrThrowArgs_1 = require("./args/FindFirstDashboardgraphqlOrThrowArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardgraphqlOrThrowResolver = class FindFirstDashboardgraphqlOrThrowResolver {
    async findFirstDashboardgraphqlOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardgraphqlOrThrowArgs_1.FindFirstDashboardgraphqlOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardgraphqlOrThrowResolver.prototype, "findFirstDashboardgraphqlOrThrow", null);
FindFirstDashboardgraphqlOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], FindFirstDashboardgraphqlOrThrowResolver);
exports.FindFirstDashboardgraphqlOrThrowResolver = FindFirstDashboardgraphqlOrThrowResolver;
