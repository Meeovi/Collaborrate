"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneDashboardslistArgs_1 = require("./args/UpdateOneDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const helpers_1 = require("../../../helpers");
let UpdateOneDashboardslistResolver = class UpdateOneDashboardslistResolver {
    async updateOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardslistArgs_1.UpdateOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDashboardslistResolver.prototype, "updateOneDashboardslist", null);
UpdateOneDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], UpdateOneDashboardslistResolver);
exports.UpdateOneDashboardslistResolver = UpdateOneDashboardslistResolver;
