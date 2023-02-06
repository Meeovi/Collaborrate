"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDashboardrestapiArgs_1 = require("./args/DeleteManyDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDashboardrestapiResolver = class DeleteManyDashboardrestapiResolver {
    async deleteManyDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardrestapiArgs_1.DeleteManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDashboardrestapiResolver.prototype, "deleteManyDashboardrestapi", null);
DeleteManyDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], DeleteManyDashboardrestapiResolver);
exports.DeleteManyDashboardrestapiResolver = DeleteManyDashboardrestapiResolver;
