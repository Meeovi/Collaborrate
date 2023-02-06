"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRolesArgs_1 = require("./args/AggregateRolesArgs");
const CreateManyRolesArgs_1 = require("./args/CreateManyRolesArgs");
const CreateOneRolesArgs_1 = require("./args/CreateOneRolesArgs");
const DeleteManyRolesArgs_1 = require("./args/DeleteManyRolesArgs");
const DeleteOneRolesArgs_1 = require("./args/DeleteOneRolesArgs");
const FindFirstRolesArgs_1 = require("./args/FindFirstRolesArgs");
const FindFirstRolesOrThrowArgs_1 = require("./args/FindFirstRolesOrThrowArgs");
const FindManyRolesArgs_1 = require("./args/FindManyRolesArgs");
const FindUniqueRolesArgs_1 = require("./args/FindUniqueRolesArgs");
const FindUniqueRolesOrThrowArgs_1 = require("./args/FindUniqueRolesOrThrowArgs");
const GroupByRolesArgs_1 = require("./args/GroupByRolesArgs");
const UpdateManyRolesArgs_1 = require("./args/UpdateManyRolesArgs");
const UpdateOneRolesArgs_1 = require("./args/UpdateOneRolesArgs");
const UpsertOneRolesArgs_1 = require("./args/UpsertOneRolesArgs");
const helpers_1 = require("../../../helpers");
const Roles_1 = require("../../../models/Roles");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRoles_1 = require("../../outputs/AggregateRoles");
const RolesGroupBy_1 = require("../../outputs/RolesGroupBy");
let RolesCrudResolver = class RolesCrudResolver {
    async aggregateRoles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRolesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRolesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRoles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRoles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).roles.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRoles_1.AggregateRoles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRolesArgs_1.AggregateRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "aggregateRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRolesArgs_1.CreateManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "createManyRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRolesArgs_1.CreateOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "createOneRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRolesArgs_1.DeleteManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "deleteManyRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRolesArgs_1.DeleteOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "deleteOneRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRolesArgs_1.FindFirstRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "findFirstRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRolesOrThrowArgs_1.FindFirstRolesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "findFirstRolesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Roles_1.Roles], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRolesArgs_1.FindManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "findManyRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRolesArgs_1.FindUniqueRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "findUniqueRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRolesOrThrowArgs_1.FindUniqueRolesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "findUniqueRolesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RolesGroupBy_1.RolesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRolesArgs_1.GroupByRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "groupByRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRolesArgs_1.UpdateManyRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "updateManyRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRolesArgs_1.UpdateOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "updateOneRoles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Roles_1.Roles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRolesArgs_1.UpsertOneRolesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RolesCrudResolver.prototype, "upsertOneRoles", null);
RolesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Roles_1.Roles)
], RolesCrudResolver);
exports.RolesCrudResolver = RolesCrudResolver;
