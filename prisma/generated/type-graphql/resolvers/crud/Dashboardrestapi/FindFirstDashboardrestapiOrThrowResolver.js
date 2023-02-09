"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardrestapiOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardrestapiOrThrowArgs_1 = require("./args/FindFirstDashboardrestapiOrThrowArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardrestapiOrThrowResolver = class FindFirstDashboardrestapiOrThrowResolver {
    async findFirstDashboardrestapiOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardrestapiOrThrowArgs_1.FindFirstDashboardrestapiOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardrestapiOrThrowResolver.prototype, "findFirstDashboardrestapiOrThrow", null);
FindFirstDashboardrestapiOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], FindFirstDashboardrestapiOrThrowResolver);
exports.FindFirstDashboardrestapiOrThrowResolver = FindFirstDashboardrestapiOrThrowResolver;
