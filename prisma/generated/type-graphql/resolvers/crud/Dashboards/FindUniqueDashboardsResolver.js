"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardsArgs_1 = require("./args/FindUniqueDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardsResolver = class FindUniqueDashboardsResolver {
    async findUniqueDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardsArgs_1.FindUniqueDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardsResolver.prototype, "findUniqueDashboards", null);
FindUniqueDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], FindUniqueDashboardsResolver);
exports.FindUniqueDashboardsResolver = FindUniqueDashboardsResolver;
