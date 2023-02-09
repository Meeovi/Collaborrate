"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneDashboardslistArgs_1 = require("./args/UpsertOneDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const helpers_1 = require("../../../helpers");
let UpsertOneDashboardslistResolver = class UpsertOneDashboardslistResolver {
    async upsertOneDashboardslist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslist_1.Dashboardslist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardslistArgs_1.UpsertOneDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDashboardslistResolver.prototype, "upsertOneDashboardslist", null);
UpsertOneDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], UpsertOneDashboardslistResolver);
exports.UpsertOneDashboardslistResolver = UpsertOneDashboardslistResolver;
