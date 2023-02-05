"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardrestapiResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneDashboardrestapiArgs_1 = require("./args/CreateOneDashboardrestapiArgs");
const Dashboardrestapi_1 = require("../../../models/Dashboardrestapi");
const helpers_1 = require("../../../helpers");
let CreateOneDashboardrestapiResolver = class CreateOneDashboardrestapiResolver {
    async createOneDashboardrestapi(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardrestapi.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardrestapi_1.Dashboardrestapi, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardrestapiArgs_1.CreateOneDashboardrestapiArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneDashboardrestapiResolver.prototype, "createOneDashboardrestapi", null);
CreateOneDashboardrestapiResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardrestapi_1.Dashboardrestapi)
], CreateOneDashboardrestapiResolver);
exports.CreateOneDashboardrestapiResolver = CreateOneDashboardrestapiResolver;
