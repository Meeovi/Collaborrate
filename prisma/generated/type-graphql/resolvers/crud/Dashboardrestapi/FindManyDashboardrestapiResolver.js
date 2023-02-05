"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyDashboardrestapiArgs_1 = require("./args/FindManyDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const helpers_1 = require("../../../helpers");
let FindManyDashboardrestapiResolver = class FindManyDashboardrestapiResolver {
    async dashboardrestapis(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Dashboardrestapi_1.Dashboardrestapi], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDashboardrestapiArgs_1.FindManyDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyDashboardrestapiResolver.prototype, "dashboardrestapis", null);
FindManyDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], FindManyDashboardrestapiResolver);
exports.FindManyDashboardrestapiResolver = FindManyDashboardrestapiResolver;
