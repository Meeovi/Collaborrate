"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertStatisticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertStatisticsArgs_1 = require("./args/UpsertStatisticsArgs");
const Statistics_1 = require("../../../models/Statistics");
const helpers_1 = require("../../../helpers");
let UpsertStatisticsResolver = class UpsertStatisticsResolver {
    async upsertStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertStatisticsArgs_1.UpsertStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertStatisticsResolver.prototype, "upsertStatistics", null);
UpsertStatisticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], UpsertStatisticsResolver);
exports.UpsertStatisticsResolver = UpsertStatisticsResolver;
