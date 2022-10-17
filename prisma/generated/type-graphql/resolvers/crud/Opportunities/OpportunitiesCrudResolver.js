"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOpportunitiesArgs_1 = require("./args/AggregateOpportunitiesArgs");
const CreateManyOpportunitiesArgs_1 = require("./args/CreateManyOpportunitiesArgs");
const CreateOneOpportunitiesArgs_1 = require("./args/CreateOneOpportunitiesArgs");
const DeleteManyOpportunitiesArgs_1 = require("./args/DeleteManyOpportunitiesArgs");
const DeleteOneOpportunitiesArgs_1 = require("./args/DeleteOneOpportunitiesArgs");
const FindFirstOpportunitiesArgs_1 = require("./args/FindFirstOpportunitiesArgs");
const FindManyOpportunitiesArgs_1 = require("./args/FindManyOpportunitiesArgs");
const FindUniqueOpportunitiesArgs_1 = require("./args/FindUniqueOpportunitiesArgs");
const GroupByOpportunitiesArgs_1 = require("./args/GroupByOpportunitiesArgs");
const UpdateManyOpportunitiesArgs_1 = require("./args/UpdateManyOpportunitiesArgs");
const UpdateOneOpportunitiesArgs_1 = require("./args/UpdateOneOpportunitiesArgs");
const UpsertOneOpportunitiesArgs_1 = require("./args/UpsertOneOpportunitiesArgs");
const helpers_1 = require("../../../helpers");
const Opportunities_1 = require("../../../models/Opportunities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOpportunities_1 = require("../../outputs/AggregateOpportunities");
const OpportunitiesGroupBy_1 = require("../../outputs/OpportunitiesGroupBy");
let OpportunitiesCrudResolver = class OpportunitiesCrudResolver {
    async aggregateOpportunities(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByOpportunities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOpportunities_1.AggregateOpportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOpportunitiesArgs_1.AggregateOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "aggregateOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOpportunitiesArgs_1.CreateManyOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "createManyOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneOpportunitiesArgs_1.CreateOneOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "createOneOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOpportunitiesArgs_1.DeleteManyOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "deleteManyOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneOpportunitiesArgs_1.DeleteOneOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "deleteOneOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOpportunitiesArgs_1.FindFirstOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "findFirstOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Opportunities_1.Opportunities], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOpportunitiesArgs_1.FindManyOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "findManyOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOpportunitiesArgs_1.FindUniqueOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "findUniqueOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OpportunitiesGroupBy_1.OpportunitiesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOpportunitiesArgs_1.GroupByOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "groupByOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOpportunitiesArgs_1.UpdateManyOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "updateManyOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneOpportunitiesArgs_1.UpdateOneOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "updateOneOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneOpportunitiesArgs_1.UpsertOneOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "upsertOneOpportunities", null);
OpportunitiesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], OpportunitiesCrudResolver);
exports.OpportunitiesCrudResolver = OpportunitiesCrudResolver;
