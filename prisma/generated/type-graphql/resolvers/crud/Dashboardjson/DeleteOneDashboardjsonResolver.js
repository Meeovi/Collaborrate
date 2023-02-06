"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneDashboardjsonArgs_1 = require("./args/DeleteOneDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const helpers_1 = require("../../../helpers");
let DeleteOneDashboardjsonResolver = class DeleteOneDashboardjsonResolver {
    async deleteOneDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Dashboardjson_1.Dashboardjson, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDashboardjsonArgs_1.DeleteOneDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneDashboardjsonResolver.prototype, "deleteOneDashboardjson", null);
DeleteOneDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], DeleteOneDashboardjsonResolver);
exports.DeleteOneDashboardjsonResolver = DeleteOneDashboardjsonResolver;
