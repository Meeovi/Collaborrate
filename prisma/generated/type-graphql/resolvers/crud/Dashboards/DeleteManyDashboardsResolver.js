"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDashboardsArgs_1 = require("./args/DeleteManyDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDashboardsResolver = class DeleteManyDashboardsResolver {
    async deleteManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardsArgs_1.DeleteManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDashboardsResolver.prototype, "deleteManyDashboards", null);
DeleteManyDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], DeleteManyDashboardsResolver);
exports.DeleteManyDashboardsResolver = DeleteManyDashboardsResolver;
