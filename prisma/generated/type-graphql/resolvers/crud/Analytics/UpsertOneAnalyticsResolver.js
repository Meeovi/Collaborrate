"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAnalyticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneAnalyticsArgs_1 = require("./args/UpsertOneAnalyticsArgs");
const Analytics_1 = require("../../../models/Analytics");
const helpers_1 = require("../../../helpers");
let UpsertOneAnalyticsResolver = class UpsertOneAnalyticsResolver {
    async upsertOneAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Analytics_1.Analytics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAnalyticsArgs_1.UpsertOneAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneAnalyticsResolver.prototype, "upsertOneAnalytics", null);
UpsertOneAnalyticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], UpsertOneAnalyticsResolver);
exports.UpsertOneAnalyticsResolver = UpsertOneAnalyticsResolver;
