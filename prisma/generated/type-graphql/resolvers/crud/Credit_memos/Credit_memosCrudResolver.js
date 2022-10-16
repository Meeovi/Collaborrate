"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit_memosCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCredit_memosArgs_1 = require("./args/AggregateCredit_memosArgs");
const CreateManyCredit_memosArgs_1 = require("./args/CreateManyCredit_memosArgs");
const CreateOneCredit_memosArgs_1 = require("./args/CreateOneCredit_memosArgs");
const DeleteManyCredit_memosArgs_1 = require("./args/DeleteManyCredit_memosArgs");
const DeleteOneCredit_memosArgs_1 = require("./args/DeleteOneCredit_memosArgs");
const FindFirstCredit_memosArgs_1 = require("./args/FindFirstCredit_memosArgs");
const FindManyCredit_memosArgs_1 = require("./args/FindManyCredit_memosArgs");
const FindUniqueCredit_memosArgs_1 = require("./args/FindUniqueCredit_memosArgs");
const GroupByCredit_memosArgs_1 = require("./args/GroupByCredit_memosArgs");
const UpdateManyCredit_memosArgs_1 = require("./args/UpdateManyCredit_memosArgs");
const UpdateOneCredit_memosArgs_1 = require("./args/UpdateOneCredit_memosArgs");
const UpsertOneCredit_memosArgs_1 = require("./args/UpsertOneCredit_memosArgs");
const helpers_1 = require("../../../helpers");
const Credit_memos_1 = require("../../../models/Credit_memos");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCredit_memos_1 = require("../../outputs/AggregateCredit_memos");
const Credit_memosGroupBy_1 = require("../../outputs/Credit_memosGroupBy");
let Credit_memosCrudResolver = class Credit_memosCrudResolver {
    async aggregateCredit_memos(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCredit_memos(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCredit_memos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).credit_memos.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCredit_memos_1.AggregateCredit_memos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCredit_memosArgs_1.AggregateCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "aggregateCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyCredit_memosArgs_1.CreateManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "createManyCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Credit_memos_1.Credit_memos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCredit_memosArgs_1.CreateOneCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "createOneCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCredit_memosArgs_1.DeleteManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "deleteManyCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCredit_memosArgs_1.DeleteOneCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "deleteOneCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCredit_memosArgs_1.FindFirstCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "findFirstCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Credit_memos_1.Credit_memos], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCredit_memosArgs_1.FindManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "findManyCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCredit_memosArgs_1.FindUniqueCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "findUniqueCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Credit_memosGroupBy_1.Credit_memosGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCredit_memosArgs_1.GroupByCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "groupByCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCredit_memosArgs_1.UpdateManyCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "updateManyCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Credit_memos_1.Credit_memos, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCredit_memosArgs_1.UpdateOneCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "updateOneCredit_memos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Credit_memos_1.Credit_memos, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCredit_memosArgs_1.UpsertOneCredit_memosArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Credit_memosCrudResolver.prototype, "upsertOneCredit_memos", null);
Credit_memosCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Credit_memos_1.Credit_memos)
], Credit_memosCrudResolver);
exports.Credit_memosCrudResolver = Credit_memosCrudResolver;
