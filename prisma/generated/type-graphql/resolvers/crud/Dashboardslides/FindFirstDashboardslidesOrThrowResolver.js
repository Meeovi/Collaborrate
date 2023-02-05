"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslidesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardslidesOrThrowArgs_1 = require("./args/FindFirstDashboardslidesOrThrowArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardslidesOrThrowResolver = class FindFirstDashboardslidesOrThrowResolver {
    async findFirstDashboardslidesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslidesOrThrowArgs_1.FindFirstDashboardslidesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardslidesOrThrowResolver.prototype, "findFirstDashboardslidesOrThrow", null);
FindFirstDashboardslidesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], FindFirstDashboardslidesOrThrowResolver);
exports.FindFirstDashboardslidesOrThrowResolver = FindFirstDashboardslidesOrThrowResolver;
