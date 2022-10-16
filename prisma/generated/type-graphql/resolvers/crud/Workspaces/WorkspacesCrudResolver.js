"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWorkspacesArgs_1 = require("./args/AggregateWorkspacesArgs");
const CreateManyWorkspacesArgs_1 = require("./args/CreateManyWorkspacesArgs");
const CreateOneWorkspacesArgs_1 = require("./args/CreateOneWorkspacesArgs");
const DeleteManyWorkspacesArgs_1 = require("./args/DeleteManyWorkspacesArgs");
const DeleteOneWorkspacesArgs_1 = require("./args/DeleteOneWorkspacesArgs");
const FindFirstWorkspacesArgs_1 = require("./args/FindFirstWorkspacesArgs");
const FindManyWorkspacesArgs_1 = require("./args/FindManyWorkspacesArgs");
const FindUniqueWorkspacesArgs_1 = require("./args/FindUniqueWorkspacesArgs");
const GroupByWorkspacesArgs_1 = require("./args/GroupByWorkspacesArgs");
const UpdateManyWorkspacesArgs_1 = require("./args/UpdateManyWorkspacesArgs");
const UpdateOneWorkspacesArgs_1 = require("./args/UpdateOneWorkspacesArgs");
const UpsertOneWorkspacesArgs_1 = require("./args/UpsertOneWorkspacesArgs");
const helpers_1 = require("../../../helpers");
const Workspaces_1 = require("../../../models/Workspaces");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWorkspaces_1 = require("../../outputs/AggregateWorkspaces");
const WorkspacesGroupBy_1 = require("../../outputs/WorkspacesGroupBy");
let WorkspacesCrudResolver = class WorkspacesCrudResolver {
    async aggregateWorkspaces(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWorkspaces(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWorkspaces(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).workspaces.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWorkspaces_1.AggregateWorkspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWorkspacesArgs_1.AggregateWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "aggregateWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWorkspacesArgs_1.CreateManyWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "createManyWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWorkspacesArgs_1.CreateOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "createOneWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWorkspacesArgs_1.DeleteManyWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "deleteManyWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWorkspacesArgs_1.DeleteOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "deleteOneWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspaces_1.Workspaces, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWorkspacesArgs_1.FindFirstWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "findFirstWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Workspaces_1.Workspaces], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWorkspacesArgs_1.FindManyWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "findManyWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Workspaces_1.Workspaces, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWorkspacesArgs_1.FindUniqueWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "findUniqueWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WorkspacesGroupBy_1.WorkspacesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWorkspacesArgs_1.GroupByWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "groupByWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWorkspacesArgs_1.UpdateManyWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "updateManyWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWorkspacesArgs_1.UpdateOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "updateOneWorkspaces", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Workspaces_1.Workspaces, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWorkspacesArgs_1.UpsertOneWorkspacesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WorkspacesCrudResolver.prototype, "upsertOneWorkspaces", null);
WorkspacesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Workspaces_1.Workspaces)
], WorkspacesCrudResolver);
exports.WorkspacesCrudResolver = WorkspacesCrudResolver;
