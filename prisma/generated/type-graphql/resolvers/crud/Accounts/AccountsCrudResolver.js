"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateAccountsArgs_1 = require("./args/AggregateAccountsArgs");
const CreateAccountsArgs_1 = require("./args/CreateAccountsArgs");
const CreateManyAccountsArgs_1 = require("./args/CreateManyAccountsArgs");
const DeleteAccountsArgs_1 = require("./args/DeleteAccountsArgs");
const DeleteManyAccountsArgs_1 = require("./args/DeleteManyAccountsArgs");
const FindFirstAccountsArgs_1 = require("./args/FindFirstAccountsArgs");
const FindManyAccountsArgs_1 = require("./args/FindManyAccountsArgs");
const FindUniqueAccountsArgs_1 = require("./args/FindUniqueAccountsArgs");
const GroupByAccountsArgs_1 = require("./args/GroupByAccountsArgs");
const UpdateAccountsArgs_1 = require("./args/UpdateAccountsArgs");
const UpdateManyAccountsArgs_1 = require("./args/UpdateManyAccountsArgs");
const UpsertAccountsArgs_1 = require("./args/UpsertAccountsArgs");
const helpers_1 = require("../../../helpers");
const Accounts_1 = require("../../../models/Accounts");
const AccountsGroupBy_1 = require("../../outputs/AccountsGroupBy");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAccounts_1 = require("../../outputs/AggregateAccounts");
let AccountsCrudResolver = class AccountsCrudResolver {
    async findUniqueAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertAccounts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateAccounts(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByAccounts(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).accounts.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Accounts_1.Accounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAccountsArgs_1.FindUniqueAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "findUniqueAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Accounts_1.Accounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAccountsArgs_1.FindFirstAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "findFirstAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Accounts_1.Accounts], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAccountsArgs_1.FindManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "findManyAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateAccountsArgs_1.CreateAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "createAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAccountsArgs_1.CreateManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "createManyAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteAccountsArgs_1.DeleteAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "deleteAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateAccountsArgs_1.UpdateAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "updateAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAccountsArgs_1.DeleteManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "deleteManyAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAccountsArgs_1.UpdateManyAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "updateManyAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Accounts_1.Accounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertAccountsArgs_1.UpsertAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "upsertAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAccounts_1.AggregateAccounts, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAccountsArgs_1.AggregateAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "aggregateAccounts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AccountsGroupBy_1.AccountsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAccountsArgs_1.GroupByAccountsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountsCrudResolver.prototype, "groupByAccounts", null);
AccountsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Accounts_1.Accounts)
], AccountsCrudResolver);
exports.AccountsCrudResolver = AccountsCrudResolver;
