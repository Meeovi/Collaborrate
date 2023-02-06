"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardslidesArgs_1 = require("./args/FindFirstDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardslidesResolver = class FindFirstDashboardslidesResolver {
    async findFirstDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardslidesArgs_1.FindFirstDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardslidesResolver.prototype, "findFirstDashboardslides", null);
FindFirstDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], FindFirstDashboardslidesResolver);
exports.FindFirstDashboardslidesResolver = FindFirstDashboardslidesResolver;
