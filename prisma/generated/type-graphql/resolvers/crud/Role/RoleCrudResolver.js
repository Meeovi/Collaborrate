"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRoleArgs_1 = require("./args/AggregateRoleArgs");
const CreateManyRoleArgs_1 = require("./args/CreateManyRoleArgs");
const CreateRoleArgs_1 = require("./args/CreateRoleArgs");
const DeleteManyRoleArgs_1 = require("./args/DeleteManyRoleArgs");
const DeleteRoleArgs_1 = require("./args/DeleteRoleArgs");
const FindFirstRoleArgs_1 = require("./args/FindFirstRoleArgs");
const FindManyRoleArgs_1 = require("./args/FindManyRoleArgs");
const FindUniqueRoleArgs_1 = require("./args/FindUniqueRoleArgs");
const GroupByRoleArgs_1 = require("./args/GroupByRoleArgs");
const UpdateManyRoleArgs_1 = require("./args/UpdateManyRoleArgs");
const UpdateRoleArgs_1 = require("./args/UpdateRoleArgs");
const UpsertRoleArgs_1 = require("./args/UpsertRoleArgs");
const helpers_1 = require("../../../helpers");
const Role_1 = require("../../../models/Role");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRole_1 = require("../../outputs/AggregateRole");
const RoleGroupBy_1 = require("../../outputs/RoleGroupBy");
let RoleCrudResolver = class RoleCrudResolver {
    async role(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async roles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertRole(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateRole(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).role.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByRole(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).role.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoleArgs_1.FindUniqueRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "role", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoleArgs_1.FindFirstRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "findFirstRole", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Role_1.Role], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRoleArgs_1.FindManyRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "roles", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateRoleArgs_1.CreateRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "createRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyRoleArgs_1.CreateManyRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "createManyRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteRoleArgs_1.DeleteRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "deleteRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateRoleArgs_1.UpdateRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "updateRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRoleArgs_1.DeleteManyRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "deleteManyRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRoleArgs_1.UpdateManyRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "updateManyRole", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Role_1.Role, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertRoleArgs_1.UpsertRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "upsertRole", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRole_1.AggregateRole, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRoleArgs_1.AggregateRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "aggregateRole", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RoleGroupBy_1.RoleGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRoleArgs_1.GroupByRoleArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoleCrudResolver.prototype, "groupByRole", null);
RoleCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Role_1.Role)
], RoleCrudResolver);
exports.RoleCrudResolver = RoleCrudResolver;
