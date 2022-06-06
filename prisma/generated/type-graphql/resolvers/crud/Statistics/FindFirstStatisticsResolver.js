"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStatisticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstStatisticsArgs_1 = require("./args/FindFirstStatisticsArgs");
const Statistics_1 = require("../../../models/Statistics");
const helpers_1 = require("../../../helpers");
let FindFirstStatisticsResolver = class FindFirstStatisticsResolver {
    async findFirstStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStatisticsArgs_1.FindFirstStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStatisticsResolver.prototype, "findFirstStatistics", null);
FindFirstStatisticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], FindFirstStatisticsResolver);
exports.FindFirstStatisticsResolver = FindFirstStatisticsResolver;
