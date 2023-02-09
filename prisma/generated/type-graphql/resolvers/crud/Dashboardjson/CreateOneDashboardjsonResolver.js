"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneDashboardjsonArgs_1 = require("./args/CreateOneDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let CreateOneDashboardjsonResolver = class CreateOneDashboardjsonResolver {
    async createOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDashboardjsonArgs_1.CreateOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneDashboardjsonResolver.prototype, "createOneDashboardjson", null);
CreateOneDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], CreateOneDashboardjsonResolver);
exports.CreateOneDashboardjsonResolver = CreateOneDashboardjsonResolver;
