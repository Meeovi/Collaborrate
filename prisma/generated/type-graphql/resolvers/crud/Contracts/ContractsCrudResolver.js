"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateContractsArgs_1 = require("./args/AggregateContractsArgs");
const CreateContractsArgs_1 = require("./args/CreateContractsArgs");
const CreateManyContractsArgs_1 = require("./args/CreateManyContractsArgs");
const DeleteContractsArgs_1 = require("./args/DeleteContractsArgs");
const DeleteManyContractsArgs_1 = require("./args/DeleteManyContractsArgs");
const FindFirstContractsArgs_1 = require("./args/FindFirstContractsArgs");
const FindManyContractsArgs_1 = require("./args/FindManyContractsArgs");
const FindUniqueContractsArgs_1 = require("./args/FindUniqueContractsArgs");
const GroupByContractsArgs_1 = require("./args/GroupByContractsArgs");
const UpdateContractsArgs_1 = require("./args/UpdateContractsArgs");
const UpdateManyContractsArgs_1 = require("./args/UpdateManyContractsArgs");
const UpsertContractsArgs_1 = require("./args/UpsertContractsArgs");
const helpers_1 = require("../../../helpers");
const Contracts_1 = require("../../../models/Contracts");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateContracts_1 = require("../../outputs/AggregateContracts");
const ContractsGroupBy_1 = require("../../outputs/ContractsGroupBy");
let ContractsCrudResolver = class ContractsCrudResolver {
    async findUniqueContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertContracts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateContracts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByContracts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).contracts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueContractsArgs_1.FindUniqueContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "findUniqueContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstContractsArgs_1.FindFirstContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "findFirstContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Contracts_1.Contracts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyContractsArgs_1.FindManyContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "findManyContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateContractsArgs_1.CreateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "createContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyContractsArgs_1.CreateManyContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "createManyContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteContractsArgs_1.DeleteContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "deleteContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateContractsArgs_1.UpdateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "updateContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyContractsArgs_1.DeleteManyContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "deleteManyContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyContractsArgs_1.UpdateManyContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "updateManyContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Contracts_1.Contracts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertContractsArgs_1.UpsertContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "upsertContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateContracts_1.AggregateContracts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateContractsArgs_1.AggregateContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "aggregateContracts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ContractsGroupBy_1.ContractsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByContractsArgs_1.GroupByContractsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ContractsCrudResolver.prototype, "groupByContracts", null);
ContractsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Contracts_1.Contracts)
], ContractsCrudResolver);
exports.ContractsCrudResolver = ContractsCrudResolver;
