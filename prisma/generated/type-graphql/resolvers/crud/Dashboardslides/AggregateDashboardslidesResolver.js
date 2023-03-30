"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateDashboardslidesArgs_1 = require("./args/AggregateDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const AggregateDashboardslides_1 = require("../../outputs/AggregateDashboardslides");
const helpers_1 = require("../../../helpers");
let AggregateDashboardslidesResolver = class AggregateDashboardslidesResolver {
    async aggregateDashboardslides(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDashboardslides_1.AggregateDashboardslides, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDashboardslidesArgs_1.AggregateDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateDashboardslidesResolver.prototype, "aggregateDashboardslides", null);
AggregateDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], AggregateDashboardslidesResolver);
exports.AggregateDashboardslidesResolver = AggregateDashboardslidesResolver;
