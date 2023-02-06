"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueDashboardjsonArgs_1 = require("./args/FindUniqueDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let FindUniqueDashboardjsonResolver = class FindUniqueDashboardjsonResolver {
    async dashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDashboardjsonArgs_1.FindUniqueDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueDashboardjsonResolver.prototype, "dashboardjson", null);
FindUniqueDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], FindUniqueDashboardjsonResolver);
exports.FindUniqueDashboardjsonResolver = FindUniqueDashboardjsonResolver;
