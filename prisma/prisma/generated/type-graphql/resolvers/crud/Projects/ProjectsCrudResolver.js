"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProjectsArgs_1 = require("./args/AggregateProjectsArgs");
const CreateManyProjectsArgs_1 = require("./args/CreateManyProjectsArgs");
const CreateProjectsArgs_1 = require("./args/CreateProjectsArgs");
const DeleteManyProjectsArgs_1 = require("./args/DeleteManyProjectsArgs");
const DeleteProjectsArgs_1 = require("./args/DeleteProjectsArgs");
const FindFirstProjectsArgs_1 = require("./args/FindFirstProjectsArgs");
const FindManyProjectsArgs_1 = require("./args/FindManyProjectsArgs");
const FindUniqueProjectsArgs_1 = require("./args/FindUniqueProjectsArgs");
const GroupByProjectsArgs_1 = require("./args/GroupByProjectsArgs");
const UpdateManyProjectsArgs_1 = require("./args/UpdateManyProjectsArgs");
const UpdateProjectsArgs_1 = require("./args/UpdateProjectsArgs");
const UpsertProjectsArgs_1 = require("./args/UpsertProjectsArgs");
const helpers_1 = require("../../../helpers");
const Projects_1 = require("../../../models/Projects");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProjects_1 = require("../../outputs/AggregateProjects");
const ProjectsGroupBy_1 = require("../../outputs/ProjectsGroupBy");
let ProjectsCrudResolver = class ProjectsCrudResolver {
    async findUniqueProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProjects(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProjects(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProjects(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).projects.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProjectsArgs_1.FindUniqueProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "findUniqueProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProjectsArgs_1.FindFirstProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "findFirstProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Projects_1.Projects], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProjectsArgs_1.FindManyProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "findManyProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProjectsArgs_1.CreateProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "createProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProjectsArgs_1.CreateManyProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "createManyProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProjectsArgs_1.DeleteProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "deleteProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProjectsArgs_1.UpdateProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "updateProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProjectsArgs_1.DeleteManyProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "deleteManyProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProjectsArgs_1.UpdateManyProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "updateManyProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Projects_1.Projects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProjectsArgs_1.UpsertProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "upsertProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProjects_1.AggregateProjects, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProjectsArgs_1.AggregateProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "aggregateProjects", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ProjectsGroupBy_1.ProjectsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProjectsArgs_1.GroupByProjectsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ProjectsCrudResolver.prototype, "groupByProjects", null);
ProjectsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Projects_1.Projects)
], ProjectsCrudResolver);
exports.ProjectsCrudResolver = ProjectsCrudResolver;
