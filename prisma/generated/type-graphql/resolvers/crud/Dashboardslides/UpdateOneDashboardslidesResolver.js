"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneDashboardslidesArgs_1 = require("./args/UpdateOneDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const helpers_1 = require("../../../helpers");
let UpdateOneDashboardslidesResolver = class UpdateOneDashboardslidesResolver {
    async updateOneDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardslides_1.Dashboardslides, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDashboardslidesArgs_1.UpdateOneDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneDashboardslidesResolver.prototype, "updateOneDashboardslides", null);
UpdateOneDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], UpdateOneDashboardslidesResolver);
exports.UpdateOneDashboardslidesResolver = UpdateOneDashboardslidesResolver;
