"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardslidesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardslidesOrThrowArgs_1 = require("./args/FindUniqueDashboardslidesOrThrowArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardslidesOrThrowResolver = class FindUniqueDashboardslidesOrThrowResolver {
    async findUniqueDashboardslidesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardslidesOrThrowArgs_1.FindUniqueDashboardslidesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardslidesOrThrowResolver.prototype, "findUniqueDashboardslidesOrThrow", null);
FindUniqueDashboardslidesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], FindUniqueDashboardslidesOrThrowResolver);
exports.FindUniqueDashboardslidesOrThrowResolver = FindUniqueDashboardslidesOrThrowResolver;
