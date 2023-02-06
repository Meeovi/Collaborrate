"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyDashboardrestapiArgs_1 = require("./args/UpdateManyDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyDashboardrestapiResolver = class UpdateManyDashboardrestapiResolver {
    async updateManyDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDashboardrestapiArgs_1.UpdateManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyDashboardrestapiResolver.prototype, "updateManyDashboardrestapi", null);
UpdateManyDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], UpdateManyDashboardrestapiResolver);
exports.UpdateManyDashboardrestapiResolver = UpdateManyDashboardrestapiResolver;
