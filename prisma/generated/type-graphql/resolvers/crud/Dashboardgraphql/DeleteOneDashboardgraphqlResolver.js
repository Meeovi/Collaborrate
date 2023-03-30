"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardgraphqlResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneDashboardgraphqlArgs_1 = require("./args/DeleteOneDashboardgraphqlArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let DeleteOneDashboardgraphqlResolver = class DeleteOneDashboardgraphqlResolver {
    async deleteOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardgraphql_1.Dashboardgraphql, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardgraphqlArgs_1.DeleteOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneDashboardgraphqlResolver.prototype, "deleteOneDashboardgraphql", null);
DeleteOneDashboardgraphqlResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], DeleteOneDashboardgraphqlResolver);
exports.DeleteOneDashboardgraphqlResolver = DeleteOneDashboardgraphqlResolver;
