"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyDashboardsArgs_1 = require("./args/UpdateManyDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyDashboardsResolver = class UpdateManyDashboardsResolver {
    async updateManyDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardsArgs_1.UpdateManyDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyDashboardsResolver.prototype, "updateManyDashboards", null);
UpdateManyDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], UpdateManyDashboardsResolver);
exports.UpdateManyDashboardsResolver = UpdateManyDashboardsResolver;
