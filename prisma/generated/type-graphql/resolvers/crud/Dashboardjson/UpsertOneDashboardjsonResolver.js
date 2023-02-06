"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneDashboardjsonArgs_1 = require("./args/UpsertOneDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let UpsertOneDashboardjsonResolver = class UpsertOneDashboardjsonResolver {
    async upsertOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.upsert({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDashboardjsonArgs_1.UpsertOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneDashboardjsonResolver.prototype, "upsertOneDashboardjson", null);
UpsertOneDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], UpsertOneDashboardjsonResolver);
exports.UpsertOneDashboardjsonResolver = UpsertOneDashboardjsonResolver;
