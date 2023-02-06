"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardgraphqlOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardgraphqlOrThrowArgs_1 = require("./args/FindUniqueDashboardgraphqlOrThrowArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardgraphqlOrThrowResolver = class FindUniqueDashboardgraphqlOrThrowResolver {
    async getDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardgraphqlOrThrowArgs_1.FindUniqueDashboardgraphqlOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardgraphqlOrThrowResolver.prototype, "getDashboardgraphql", null);
FindUniqueDashboardgraphqlOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], FindUniqueDashboardgraphqlOrThrowResolver);
exports.FindUniqueDashboardgraphqlOrThrowResolver = FindUniqueDashboardgraphqlOrThrowResolver;
