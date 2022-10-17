"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByAnalyticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByAnalyticsArgs_1 = require("./args/GroupByAnalyticsArgs");
const Analytics_1 = require("../../../models/Analytics");
const AnalyticsGroupBy_1 = require("../../outputs/AnalyticsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByAnalyticsResolver = class GroupByAnalyticsResolver {
    async groupByAnalytics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).analytics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AnalyticsGroupBy_1.AnalyticsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAnalyticsArgs_1.GroupByAnalyticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByAnalyticsResolver.prototype, "groupByAnalytics", null);
GroupByAnalyticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Analytics_1.Analytics)
], GroupByAnalyticsResolver);
exports.GroupByAnalyticsResolver = GroupByAnalyticsResolver;
