"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneDashboardsArgs_1 = require("./args/CreateOneDashboardsArgs");
const Dashboards_1 = require("../../../models/Dashboards");
const helpers_1 = require("../../../helpers");
let CreateOneDashboardsResolver = class CreateOneDashboardsResolver {
    async createOneDashboards(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboards.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboards_1.Dashboards, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardsArgs_1.CreateOneDashboardsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneDashboardsResolver.prototype, "createOneDashboards", null);
CreateOneDashboardsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboards_1.Dashboards)
], CreateOneDashboardsResolver);
exports.CreateOneDashboardsResolver = CreateOneDashboardsResolver;
