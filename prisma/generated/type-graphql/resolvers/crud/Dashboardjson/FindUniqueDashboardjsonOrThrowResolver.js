"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardjsonOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardjsonOrThrowArgs_1 = require("./args/FindUniqueDashboardjsonOrThrowArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardjsonOrThrowResolver = class FindUniqueDashboardjsonOrThrowResolver {
    async getDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardjsonOrThrowArgs_1.FindUniqueDashboardjsonOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardjsonOrThrowResolver.prototype, "getDashboardjson", null);
FindUniqueDashboardjsonOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], FindUniqueDashboardjsonOrThrowResolver);
exports.FindUniqueDashboardjsonOrThrowResolver = FindUniqueDashboardjsonOrThrowResolver;
