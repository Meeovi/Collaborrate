"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregatePermissionsArgs_1 = require("./args/AggregatePermissionsArgs");
const CreateManyPermissionsArgs_1 = require("./args/CreateManyPermissionsArgs");
const CreateOnePermissionsArgs_1 = require("./args/CreateOnePermissionsArgs");
const DeleteManyPermissionsArgs_1 = require("./args/DeleteManyPermissionsArgs");
const DeleteOnePermissionsArgs_1 = require("./args/DeleteOnePermissionsArgs");
const FindFirstPermissionsArgs_1 = require("./args/FindFirstPermissionsArgs");
const FindFirstPermissionsOrThrowArgs_1 = require("./args/FindFirstPermissionsOrThrowArgs");
const FindManyPermissionsArgs_1 = require("./args/FindManyPermissionsArgs");
const FindUniquePermissionsArgs_1 = require("./args/FindUniquePermissionsArgs");
const FindUniquePermissionsOrThrowArgs_1 = require("./args/FindUniquePermissionsOrThrowArgs");
const GroupByPermissionsArgs_1 = require("./args/GroupByPermissionsArgs");
const UpdateManyPermissionsArgs_1 = require("./args/UpdateManyPermissionsArgs");
const UpdateOnePermissionsArgs_1 = require("./args/UpdateOnePermissionsArgs");
const UpsertOnePermissionsArgs_1 = require("./args/UpsertOnePermissionsArgs");
const helpers_1 = require("../../../helpers");
const Permissions_1 = require("../../../models/Permissions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePermissions_1 = require("../../outputs/AggregatePermissions");
const PermissionsGroupBy_1 = require("../../outputs/PermissionsGroupBy");
let PermissionsCrudResolver = class PermissionsCrudResolver {
    async aggregatePermissions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPermissionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniquePermissionsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByPermissions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOnePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregatePermissions_1.AggregatePermissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregatePermissionsArgs_1.AggregatePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "aggregatePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPermissionsArgs_1.CreateManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "createManyPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOnePermissionsArgs_1.CreateOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "createOnePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyPermissionsArgs_1.DeleteManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "deleteManyPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOnePermissionsArgs_1.DeleteOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "deleteOnePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPermissionsArgs_1.FindFirstPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findFirstPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPermissionsOrThrowArgs_1.FindFirstPermissionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findFirstPermissionsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Permissions_1.Permissions], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyPermissionsArgs_1.FindManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findManyPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePermissionsArgs_1.FindUniquePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findUniquePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePermissionsOrThrowArgs_1.FindUniquePermissionsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findUniquePermissionsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [PermissionsGroupBy_1.PermissionsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByPermissionsArgs_1.GroupByPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "groupByPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyPermissionsArgs_1.UpdateManyPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "updateManyPermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOnePermissionsArgs_1.UpdateOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "updateOnePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOnePermissionsArgs_1.UpsertOnePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "upsertOnePermissions", null);
PermissionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], PermissionsCrudResolver);
exports.PermissionsCrudResolver = PermissionsCrudResolver;
