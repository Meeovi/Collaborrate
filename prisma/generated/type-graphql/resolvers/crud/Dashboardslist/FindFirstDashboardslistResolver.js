"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardslistArgs_1 = require("./args/FindFirstDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardslistResolver = class FindFirstDashboardslistResolver {
    async findFirstDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslistArgs_1.FindFirstDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardslistResolver.prototype, "findFirstDashboardslist", null);
FindFirstDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], FindFirstDashboardslistResolver);
exports.FindFirstDashboardslistResolver = FindFirstDashboardslistResolver;
