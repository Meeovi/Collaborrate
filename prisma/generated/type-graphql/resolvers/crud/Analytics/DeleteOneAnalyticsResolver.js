"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneAnalyticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneAnalyticsArgs_1 = require("./args/DeleteOneAnalyticsArgs");
const Analytics_1 = require("../../../models/Analytics");
const helpers_1 = require("../../../helpers");
let DeleteOneAnalyticsResolver = class DeleteOneAnalyticsResolver {
    async deleteOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAnalyticsArgs_1.DeleteOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneAnalyticsResolver.prototype, "deleteOneAnalytics", null);
DeleteOneAnalyticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], DeleteOneAnalyticsResolver);
exports.DeleteOneAnalyticsResolver = DeleteOneAnalyticsResolver;
