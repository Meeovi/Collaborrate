"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTransactionsArgs_1 = require("./args/AggregateTransactionsArgs");
const CreateManyTransactionsArgs_1 = require("./args/CreateManyTransactionsArgs");
const CreateTransactionsArgs_1 = require("./args/CreateTransactionsArgs");
const DeleteManyTransactionsArgs_1 = require("./args/DeleteManyTransactionsArgs");
const DeleteTransactionsArgs_1 = require("./args/DeleteTransactionsArgs");
const FindFirstTransactionsArgs_1 = require("./args/FindFirstTransactionsArgs");
const FindManyTransactionsArgs_1 = require("./args/FindManyTransactionsArgs");
const FindUniqueTransactionsArgs_1 = require("./args/FindUniqueTransactionsArgs");
const GroupByTransactionsArgs_1 = require("./args/GroupByTransactionsArgs");
const UpdateManyTransactionsArgs_1 = require("./args/UpdateManyTransactionsArgs");
const UpdateTransactionsArgs_1 = require("./args/UpdateTransactionsArgs");
const UpsertTransactionsArgs_1 = require("./args/UpsertTransactionsArgs");
const helpers_1 = require("../../../helpers");
const Transactions_1 = require("../../../models/Transactions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTransactions_1 = require("../../outputs/AggregateTransactions");
const TransactionsGroupBy_1 = require("../../outputs/TransactionsGroupBy");
let TransactionsCrudResolver = class TransactionsCrudResolver {
    async findUniqueTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertTransactions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateTransactions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByTransactions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).transactions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTransactionsArgs_1.FindUniqueTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "findUniqueTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTransactionsArgs_1.FindFirstTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "findFirstTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Transactions_1.Transactions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTransactionsArgs_1.FindManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "findManyTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateTransactionsArgs_1.CreateTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "createTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTransactionsArgs_1.CreateManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "createManyTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteTransactionsArgs_1.DeleteTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "deleteTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateTransactionsArgs_1.UpdateTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "updateTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTransactionsArgs_1.DeleteManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "deleteManyTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTransactionsArgs_1.UpdateManyTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "updateManyTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Transactions_1.Transactions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertTransactionsArgs_1.UpsertTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "upsertTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTransactions_1.AggregateTransactions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTransactionsArgs_1.AggregateTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "aggregateTransactions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TransactionsGroupBy_1.TransactionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTransactionsArgs_1.GroupByTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TransactionsCrudResolver.prototype, "groupByTransactions", null);
TransactionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Transactions_1.Transactions)
], TransactionsCrudResolver);
exports.TransactionsCrudResolver = TransactionsCrudResolver;
