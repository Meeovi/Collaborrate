"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateLeadsArgs_1 = require("./args/AggregateLeadsArgs");
const CreateLeadsArgs_1 = require("./args/CreateLeadsArgs");
const CreateManyLeadsArgs_1 = require("./args/CreateManyLeadsArgs");
const DeleteLeadsArgs_1 = require("./args/DeleteLeadsArgs");
const DeleteManyLeadsArgs_1 = require("./args/DeleteManyLeadsArgs");
const FindFirstLeadsArgs_1 = require("./args/FindFirstLeadsArgs");
const FindManyLeadsArgs_1 = require("./args/FindManyLeadsArgs");
const FindUniqueLeadsArgs_1 = require("./args/FindUniqueLeadsArgs");
const GroupByLeadsArgs_1 = require("./args/GroupByLeadsArgs");
const UpdateLeadsArgs_1 = require("./args/UpdateLeadsArgs");
const UpdateManyLeadsArgs_1 = require("./args/UpdateManyLeadsArgs");
const UpsertLeadsArgs_1 = require("./args/UpsertLeadsArgs");
const helpers_1 = require("../../../helpers");
const Leads_1 = require("../../../models/Leads");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateLeads_1 = require("../../outputs/AggregateLeads");
const LeadsGroupBy_1 = require("../../outputs/LeadsGroupBy");
let LeadsCrudResolver = class LeadsCrudResolver {
    async findUniqueLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.findUnique({
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
    async createLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.update({
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
    async updateManyLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertLeads(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateLeads(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByLeads(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).leads.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateLeadsArgs_1.CreateLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "createLeads", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteLeadsArgs_1.DeleteLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "deleteLeads", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Leads_1.Leads, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateLeadsArgs_1.UpdateLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "updateLeads", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertLeadsArgs_1.UpsertLeadsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], LeadsCrudResolver.prototype, "upsertLeads", null);
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
LeadsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Leads_1.Leads)
], LeadsCrudResolver);
exports.LeadsCrudResolver = LeadsCrudResolver;
