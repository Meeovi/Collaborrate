"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDashboardslistArgs_1 = require("./args/DeleteManyDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDashboardslistResolver = class DeleteManyDashboardslistResolver {
    async deleteManyDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardslistArgs_1.DeleteManyDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDashboardslistResolver.prototype, "deleteManyDashboardslist", null);
DeleteManyDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], DeleteManyDashboardslistResolver);
exports.DeleteManyDashboardslistResolver = DeleteManyDashboardslistResolver;
