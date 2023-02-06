"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyDashboardslistArgs_1 = require("./args/UpdateManyDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyDashboardslistResolver = class UpdateManyDashboardslistResolver {
    async updateManyDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardslistArgs_1.UpdateManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyDashboardslistResolver.prototype, "updateManyDashboardslist", null);
UpdateManyDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], UpdateManyDashboardslistResolver);
exports.UpdateManyDashboardslistResolver = UpdateManyDashboardslistResolver;
