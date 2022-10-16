"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyAnalyticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyAnalyticsArgs_1 = require("./args/FindManyAnalyticsArgs");
const Analytics_1 = require("../../../models/Analytics");
const helpers_1 = require("../../../helpers");
let FindManyAnalyticsResolver = class FindManyAnalyticsResolver {
    async findManyAnalytics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Analytics_1.Analytics], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAnalyticsArgs_1.FindManyAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyAnalyticsResolver.prototype, "findManyAnalytics", null);
FindManyAnalyticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], FindManyAnalyticsResolver);
exports.FindManyAnalyticsResolver = FindManyAnalyticsResolver;
