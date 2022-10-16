"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStatisticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStatisticsArgs_1 = require("./args/AggregateStatisticsArgs");
const Statistics_1 = require("../../../models/Statistics");
const AggregateStatistics_1 = require("../../outputs/AggregateStatistics");
const helpers_1 = require("../../../helpers");
let AggregateStatisticsResolver = class AggregateStatisticsResolver {
    async aggregateStatistics(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStatistics_1.AggregateStatistics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStatisticsArgs_1.AggregateStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStatisticsResolver.prototype, "aggregateStatistics", null);
AggregateStatisticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], AggregateStatisticsResolver);
exports.AggregateStatisticsResolver = AggregateStatisticsResolver;
