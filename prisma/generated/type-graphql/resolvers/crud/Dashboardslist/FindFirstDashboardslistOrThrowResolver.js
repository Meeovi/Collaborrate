"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslistOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardslistOrThrowArgs_1 = require("./args/FindFirstDashboardslistOrThrowArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardslistOrThrowResolver = class FindFirstDashboardslistOrThrowResolver {
    async findFirstDashboardslistOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslistOrThrowArgs_1.FindFirstDashboardslistOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardslistOrThrowResolver.prototype, "findFirstDashboardslistOrThrow", null);
FindFirstDashboardslistOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], FindFirstDashboardslistOrThrowResolver);
exports.FindFirstDashboardslistOrThrowResolver = FindFirstDashboardslistOrThrowResolver;
