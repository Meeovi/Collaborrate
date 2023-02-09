"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstDashboardjsonArgs_1 = require("./args/FindFirstDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let FindFirstDashboardjsonResolver = class FindFirstDashboardjsonResolver {
    async findFirstDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDashboardjsonArgs_1.FindFirstDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstDashboardjsonResolver.prototype, "findFirstDashboardjson", null);
FindFirstDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], FindFirstDashboardjsonResolver);
exports.FindFirstDashboardjsonResolver = FindFirstDashboardjsonResolver;
