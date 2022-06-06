"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStatisticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByStatisticsArgs_1 = require("./args/GroupByStatisticsArgs");
const Statistics_1 = require("../../../models/Statistics");
const StatisticsGroupBy_1 = require("../../outputs/StatisticsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStatisticsResolver = class GroupByStatisticsResolver {
    async groupByStatistics(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StatisticsGroupBy_1.StatisticsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStatisticsArgs_1.GroupByStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStatisticsResolver.prototype, "groupByStatistics", null);
GroupByStatisticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], GroupByStatisticsResolver);
exports.GroupByStatisticsResolver = GroupByStatisticsResolver;
