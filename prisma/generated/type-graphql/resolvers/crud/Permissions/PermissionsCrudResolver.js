"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregatePermissionsArgs_1 = require("./args/AggregatePermissionsArgs");
const CreateManyPermissionsArgs_1 = require("./args/CreateManyPermissionsArgs");
const CreatePermissionsArgs_1 = require("./args/CreatePermissionsArgs");
const DeleteManyPermissionsArgs_1 = require("./args/DeleteManyPermissionsArgs");
const DeletePermissionsArgs_1 = require("./args/DeletePermissionsArgs");
const FindFirstPermissionsArgs_1 = require("./args/FindFirstPermissionsArgs");
const FindManyPermissionsArgs_1 = require("./args/FindManyPermissionsArgs");
const FindUniquePermissionsArgs_1 = require("./args/FindUniquePermissionsArgs");
const GroupByPermissionsArgs_1 = require("./args/GroupByPermissionsArgs");
const UpdateManyPermissionsArgs_1 = require("./args/UpdateManyPermissionsArgs");
const UpdatePermissionsArgs_1 = require("./args/UpdatePermissionsArgs");
const UpsertPermissionsArgs_1 = require("./args/UpsertPermissionsArgs");
const helpers_1 = require("../../../helpers");
const Permissions_1 = require("../../../models/Permissions");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregatePermissions_1 = require("../../outputs/AggregatePermissions");
const PermissionsGroupBy_1 = require("../../outputs/PermissionsGroupBy");
let PermissionsCrudResolver = class PermissionsCrudResolver {
    async findUniquePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deletePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updatePermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertPermissions(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregatePermissions(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByPermissions(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).permissions.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstPermissionsArgs_1.FindFirstPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "findFirstPermissions", null);
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
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreatePermissionsArgs_1.CreatePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "createPermissions", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeletePermissionsArgs_1.DeletePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "deletePermissions", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Permissions_1.Permissions, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePermissionsArgs_1.UpdatePermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "updatePermissions", null);
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertPermissionsArgs_1.UpsertPermissionsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], PermissionsCrudResolver.prototype, "upsertPermissions", null);
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
PermissionsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Permissions_1.Permissions)
], PermissionsCrudResolver);
exports.PermissionsCrudResolver = PermissionsCrudResolver;
