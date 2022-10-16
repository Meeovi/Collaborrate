"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStatisticsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneStatisticsArgs_1 = require("./args/DeleteOneStatisticsArgs");
const Statistics_1 = require("../../../models/Statistics");
const helpers_1 = require("../../../helpers");
let DeleteOneStatisticsResolver = class DeleteOneStatisticsResolver {
    async deleteOneStatistics(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).statistics.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Statistics_1.Statistics, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStatisticsArgs_1.DeleteOneStatisticsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneStatisticsResolver.prototype, "deleteOneStatistics", null);
DeleteOneStatisticsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Statistics_1.Statistics)
], DeleteOneStatisticsResolver);
exports.DeleteOneStatisticsResolver = DeleteOneStatisticsResolver;
