"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardgraphqlResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyDashboardgraphqlArgs_1 = require("./args/FindManyDashboardgraphqlArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let FindManyDashboardgraphqlResolver = class FindManyDashboardgraphqlResolver {
    async dashboardgraphqls(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardgraphql_1.Dashboardgraphql], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardgraphqlArgs_1.FindManyDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyDashboardgraphqlResolver.prototype, "dashboardgraphqls", null);
FindManyDashboardgraphqlResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], FindManyDashboardgraphqlResolver);
exports.FindManyDashboardgraphqlResolver = FindManyDashboardgraphqlResolver;
