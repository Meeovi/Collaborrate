"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyDashboardslidesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyDashboardslidesArgs_1 = require("./args/CreateManyDashboardslidesArgs");
const Dashboardslides_1 = require("../../../models/Dashboardslides");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyDashboardslidesResolver = class CreateManyDashboardslidesResolver {
    async createManyDashboardslides(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardslides.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDashboardslidesArgs_1.CreateManyDashboardslidesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyDashboardslidesResolver.prototype, "createManyDashboardslides", null);
CreateManyDashboardslidesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardslides_1.Dashboardslides)
], CreateManyDashboardslidesResolver);
exports.CreateManyDashboardslidesResolver = CreateManyDashboardslidesResolver;
