"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOpportunitiesArgs_1 = require("./args/AggregateOpportunitiesArgs");
const CreateManyOpportunitiesArgs_1 = require("./args/CreateManyOpportunitiesArgs");
const CreateOpportunitiesArgs_1 = require("./args/CreateOpportunitiesArgs");
const DeleteManyOpportunitiesArgs_1 = require("./args/DeleteManyOpportunitiesArgs");
const DeleteOpportunitiesArgs_1 = require("./args/DeleteOpportunitiesArgs");
const FindFirstOpportunitiesArgs_1 = require("./args/FindFirstOpportunitiesArgs");
const FindManyOpportunitiesArgs_1 = require("./args/FindManyOpportunitiesArgs");
const FindUniqueOpportunitiesArgs_1 = require("./args/FindUniqueOpportunitiesArgs");
const GroupByOpportunitiesArgs_1 = require("./args/GroupByOpportunitiesArgs");
const UpdateManyOpportunitiesArgs_1 = require("./args/UpdateManyOpportunitiesArgs");
const UpdateOpportunitiesArgs_1 = require("./args/UpdateOpportunitiesArgs");
const UpsertOpportunitiesArgs_1 = require("./args/UpsertOpportunitiesArgs");
const helpers_1 = require("../../../helpers");
const Opportunities_1 = require("../../../models/Opportunities");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOpportunities_1 = require("../../outputs/AggregateOpportunities");
const OpportunitiesGroupBy_1 = require("../../outputs/OpportunitiesGroupBy");
let OpportunitiesCrudResolver = class OpportunitiesCrudResolver {
    async findUniqueOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.findUnique({
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
    async createOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.update({
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
    async updateManyOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOpportunities(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOpportunities(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOpportunities(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).opportunities.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOpportunitiesArgs_1.CreateOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "createOpportunities", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOpportunitiesArgs_1.DeleteOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "deleteOpportunities", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Opportunities_1.Opportunities, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOpportunitiesArgs_1.UpdateOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "updateOpportunities", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOpportunitiesArgs_1.UpsertOpportunitiesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OpportunitiesCrudResolver.prototype, "upsertOpportunities", null);
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
OpportunitiesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Opportunities_1.Opportunities)
], OpportunitiesCrudResolver);
exports.OpportunitiesCrudResolver = OpportunitiesCrudResolver;
