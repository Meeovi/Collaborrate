"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslistResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardslistArgs_1 = require("./args/AggregateDashboardslistArgs");
const Dashboardslist_1 = require("../../../models/Dashboardslist");
const AggregateDashboardslist_1 = require("../../outputs/AggregateDashboardslist");
const helpers_1 = require("../../../helpers");
let AggregateDashboardslistResolver = class AggregateDashboardslistResolver {
    async aggregateDashboardslist(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslist.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardslist_1.AggregateDashboardslist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardslistArgs_1.AggregateDashboardslistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardslistResolver.prototype, "aggregateDashboardslist", null);
AggregateDashboardslistResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslist_1.Dashboardslist)
], AggregateDashboardslistResolver);
exports.AggregateDashboardslistResolver = AggregateDashboardslistResolver;
