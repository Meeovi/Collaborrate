"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneDashboardslidesArgs_1 = require("./args/UpsertOneDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const helpers_1 = require("../../../helpers");
let UpsertOneDashboardslidesResolver = class UpsertOneDashboardslidesResolver {
    async upsertOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardslidesArgs_1.UpsertOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDashboardslidesResolver.prototype, "upsertOneDashboardslides", null);
UpsertOneDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], UpsertOneDashboardslidesResolver);
exports.UpsertOneDashboardslidesResolver = UpsertOneDashboardslidesResolver;
