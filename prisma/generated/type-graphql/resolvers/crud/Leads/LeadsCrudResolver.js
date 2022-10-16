"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLeadsArgs_1 = require("./args/AggregateLeadsArgs");
const CreateManyLeadsArgs_1 = require("./args/CreateManyLeadsArgs");
const CreateOneLeadsArgs_1 = require("./args/CreateOneLeadsArgs");
const DeleteManyLeadsArgs_1 = require("./args/DeleteManyLeadsArgs");
const DeleteOneLeadsArgs_1 = require("./args/DeleteOneLeadsArgs");
const FindFirstLeadsArgs_1 = require("./args/FindFirstLeadsArgs");
const FindManyLeadsArgs_1 = require("./args/FindManyLeadsArgs");
const FindUniqueLeadsArgs_1 = require("./args/FindUniqueLeadsArgs");
const GroupByLeadsArgs_1 = require("./args/GroupByLeadsArgs");
const UpdateManyLeadsArgs_1 = require("./args/UpdateManyLeadsArgs");
const UpdateOneLeadsArgs_1 = require("./args/UpdateOneLeadsArgs");
const UpsertOneLeadsArgs_1 = require("./args/UpsertOneLeadsArgs");
const helpers_1 = require("../../../helpers");
const Leads_1 = require("../../../models/Leads");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLeads_1 = require("../../outputs/AggregateLeads");
const LeadsGroupBy_1 = require("../../outputs/LeadsGroupBy");
let LeadsCrudResolver = class LeadsCrudResolver {
    async aggregateLeads(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByLeads(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateLeads_1.AggregateLeads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateLeadsArgs_1.AggregateLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "aggregateLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyLeadsArgs_1.CreateManyLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "createManyLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneLeadsArgs_1.CreateOneLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "createOneLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyLeadsArgs_1.DeleteManyLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "deleteManyLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneLeadsArgs_1.DeleteOneLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "deleteOneLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstLeadsArgs_1.FindFirstLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "findFirstLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Leads_1.Leads], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyLeadsArgs_1.FindManyLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "findManyLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueLeadsArgs_1.FindUniqueLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "findUniqueLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [LeadsGroupBy_1.LeadsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByLeadsArgs_1.GroupByLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "groupByLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyLeadsArgs_1.UpdateManyLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "updateManyLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneLeadsArgs_1.UpdateOneLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "updateOneLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneLeadsArgs_1.UpsertOneLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "upsertOneLeads", null);
LeadsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], LeadsCrudResolver);
exports.LeadsCrudResolver = LeadsCrudResolver;
