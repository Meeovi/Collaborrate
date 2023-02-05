"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardgraphqlResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneDashboardgraphqlArgs_1 = require("./args/UpdateOneDashboardgraphqlArgs");
const Dashboardgraphql_1 = require("../../../models/Dashboardgraphql");
const helpers_1 = require("../../../helpers");
let UpdateOneDashboardgraphqlResolver = class UpdateOneDashboardgraphqlResolver {
    async updateOneDashboardgraphql(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardgraphql.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardgraphqlArgs_1.UpdateOneDashboardgraphqlArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDashboardgraphqlResolver.prototype, "updateOneDashboardgraphql", null);
UpdateOneDashboardgraphqlResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardgraphql_1.Dashboardgraphql)
], UpdateOneDashboardgraphqlResolver);
exports.UpdateOneDashboardgraphqlResolver = UpdateOneDashboardgraphqlResolver;
