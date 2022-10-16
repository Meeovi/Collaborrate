"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAnalyticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneAnalyticsArgs_1 = require("./args/UpdateOneAnalyticsArgs");
const Analytics_1 = require("../../../models/Analytics");
const helpers_1 = require("../../../helpers");
let UpdateOneAnalyticsResolver = class UpdateOneAnalyticsResolver {
    async updateOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAnalyticsArgs_1.UpdateOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneAnalyticsResolver.prototype, "updateOneAnalytics", null);
UpdateOneAnalyticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], UpdateOneAnalyticsResolver);
exports.UpdateOneAnalyticsResolver = UpdateOneAnalyticsResolver;
