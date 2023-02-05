"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyDashboardjsonResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyDashboardjsonArgs_1 = require("./args/DeleteManyDashboardjsonArgs");
const Dashboardjson_1 = require("../../../models/Dashboardjson");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyDashboardjsonResolver = class DeleteManyDashboardjsonResolver {
    async deleteManyDashboardjson(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).dashboardjson.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDashboardjsonArgs_1.DeleteManyDashboardjsonArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyDashboardjsonResolver.prototype, "deleteManyDashboardjson", null);
DeleteManyDashboardjsonResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Dashboardjson_1.Dashboardjson)
], DeleteManyDashboardjsonResolver);
exports.DeleteManyDashboardjsonResolver = DeleteManyDashboardjsonResolver;
