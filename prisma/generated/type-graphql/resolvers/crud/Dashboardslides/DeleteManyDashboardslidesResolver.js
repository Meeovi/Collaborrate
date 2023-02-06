"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDashboardslidesArgs_1 = require("./args/DeleteManyDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDashboardslidesResolver = class DeleteManyDashboardslidesResolver {
    async deleteManyDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardslidesArgs_1.DeleteManyDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDashboardslidesResolver.prototype, "deleteManyDashboardslides", null);
DeleteManyDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], DeleteManyDashboardslidesResolver);
exports.DeleteManyDashboardslidesResolver = DeleteManyDashboardslidesResolver;
