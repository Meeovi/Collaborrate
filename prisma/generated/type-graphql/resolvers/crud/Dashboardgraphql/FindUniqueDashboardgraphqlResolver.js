"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardgraphqlResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardgraphqlArgs_1 = require("./args/FindUniqueDashboardgraphqlArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardgraphqlResolver = class FindUniqueDashboardgraphqlResolver {
    async dashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardgraphqlArgs_1.FindUniqueDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardgraphqlResolver.prototype, "dashboardgraphql", null);
FindUniqueDashboardgraphqlResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], FindUniqueDashboardgraphqlResolver);
exports.FindUniqueDashboardgraphqlResolver = FindUniqueDashboardgraphqlResolver;
