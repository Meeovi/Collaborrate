"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardrestapiArgs_1 = require("./args/AggregateDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const AggregateDashboardrestapi_1 = require("../../outputs/AggregateDashboardrestapi");
const helpers_1 = require("../../../helpers");
let AggregateDashboardrestapiResolver = class AggregateDashboardrestapiResolver {
    async aggregateDashboardrestapi(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardrestapi_1.AggregateDashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardrestapiArgs_1.AggregateDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardrestapiResolver.prototype, "aggregateDashboardrestapi", null);
AggregateDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], AggregateDashboardrestapiResolver);
exports.AggregateDashboardrestapiResolver = AggregateDashboardrestapiResolver;
