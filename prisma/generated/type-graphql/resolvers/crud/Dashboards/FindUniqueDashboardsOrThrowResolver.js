"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardsOrThrowArgs_1 = require("./args/FindUniqueDashboardsOrThrowArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardsOrThrowResolver = class FindUniqueDashboardsOrThrowResolver {
    async findUniqueDashboardsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboards_1.Dashboards, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardsOrThrowArgs_1.FindUniqueDashboardsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardsOrThrowResolver.prototype, "findUniqueDashboardsOrThrow", null);
FindUniqueDashboardsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], FindUniqueDashboardsOrThrowResolver);
exports.FindUniqueDashboardsOrThrowResolver = FindUniqueDashboardsOrThrowResolver;
