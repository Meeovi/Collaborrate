"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneDashboardsArgs_1 = require("./args/DeleteOneDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let DeleteOneDashboardsResolver = class DeleteOneDashboardsResolver {
    async deleteOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardsArgs_1.DeleteOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneDashboardsResolver.prototype, "deleteOneDashboards", null);
DeleteOneDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], DeleteOneDashboardsResolver);
exports.DeleteOneDashboardsResolver = DeleteOneDashboardsResolver;
