"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateUsersArgs_1 = require("./args/AggregateUsersArgs");
const CreateManyUsersArgs_1 = require("./args/CreateManyUsersArgs");
const CreateOneUsersArgs_1 = require("./args/CreateOneUsersArgs");
const DeleteManyUsersArgs_1 = require("./args/DeleteManyUsersArgs");
const DeleteOneUsersArgs_1 = require("./args/DeleteOneUsersArgs");
const FindFirstUsersArgs_1 = require("./args/FindFirstUsersArgs");
const FindFirstUsersOrThrowArgs_1 = require("./args/FindFirstUsersOrThrowArgs");
const FindManyUsersArgs_1 = require("./args/FindManyUsersArgs");
const FindUniqueUsersArgs_1 = require("./args/FindUniqueUsersArgs");
const FindUniqueUsersOrThrowArgs_1 = require("./args/FindUniqueUsersOrThrowArgs");
const GroupByUsersArgs_1 = require("./args/GroupByUsersArgs");
const UpdateManyUsersArgs_1 = require("./args/UpdateManyUsersArgs");
const UpdateOneUsersArgs_1 = require("./args/UpdateOneUsersArgs");
const UpsertOneUsersArgs_1 = require("./args/UpsertOneUsersArgs");
const helpers_1 = require("../../../helpers");
const Users_1 = require("../../../models/Users");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUsers_1 = require("../../outputs/AggregateUsers");
const UsersGroupBy_1 = require("../../outputs/UsersGroupBy");
let UsersCrudResolver = class UsersCrudResolver {
    async aggregateUsers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).users.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUsersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueUsersOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUsers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUsers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).users.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUsers_1.AggregateUsers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateUsersArgs_1.AggregateUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "aggregateUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyUsersArgs_1.CreateManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "createManyUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneUsersArgs_1.CreateOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "createOneUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyUsersArgs_1.DeleteManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "deleteManyUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneUsersArgs_1.DeleteOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "deleteOneUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsersArgs_1.FindFirstUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "findFirstUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstUsersOrThrowArgs_1.FindFirstUsersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "findFirstUsersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Users_1.Users], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyUsersArgs_1.FindManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "findManyUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUsersArgs_1.FindUniqueUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "findUniqueUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueUsersOrThrowArgs_1.FindUniqueUsersOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "findUniqueUsersOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [UsersGroupBy_1.UsersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByUsersArgs_1.GroupByUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "groupByUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyUsersArgs_1.UpdateManyUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "updateManyUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneUsersArgs_1.UpdateOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "updateOneUsers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Users_1.Users, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneUsersArgs_1.UpsertOneUsersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UsersCrudResolver.prototype, "upsertOneUsers", null);
UsersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Users_1.Users)
], UsersCrudResolver);
exports.UsersCrudResolver = UsersCrudResolver;
