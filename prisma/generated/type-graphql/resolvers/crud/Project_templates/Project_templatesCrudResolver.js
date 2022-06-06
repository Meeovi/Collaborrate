"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project_templatesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateProject_templatesArgs_1 = require("./args/AggregateProject_templatesArgs");
const CreateManyProject_templatesArgs_1 = require("./args/CreateManyProject_templatesArgs");
const CreateProject_templatesArgs_1 = require("./args/CreateProject_templatesArgs");
const DeleteManyProject_templatesArgs_1 = require("./args/DeleteManyProject_templatesArgs");
const DeleteProject_templatesArgs_1 = require("./args/DeleteProject_templatesArgs");
const FindFirstProject_templatesArgs_1 = require("./args/FindFirstProject_templatesArgs");
const FindManyProject_templatesArgs_1 = require("./args/FindManyProject_templatesArgs");
const FindUniqueProject_templatesArgs_1 = require("./args/FindUniqueProject_templatesArgs");
const GroupByProject_templatesArgs_1 = require("./args/GroupByProject_templatesArgs");
const UpdateManyProject_templatesArgs_1 = require("./args/UpdateManyProject_templatesArgs");
const UpdateProject_templatesArgs_1 = require("./args/UpdateProject_templatesArgs");
const UpsertProject_templatesArgs_1 = require("./args/UpsertProject_templatesArgs");
const helpers_1 = require("../../../helpers");
const Project_templates_1 = require("../../../models/Project_templates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProject_templates_1 = require("../../outputs/AggregateProject_templates");
const Project_templatesGroupBy_1 = require("../../outputs/Project_templatesGroupBy");
let Project_templatesCrudResolver = class Project_templatesCrudResolver {
    async findUniqueProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertProject_templates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateProject_templates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByProject_templates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).project_templates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProject_templatesArgs_1.FindUniqueProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "findUniqueProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProject_templatesArgs_1.FindFirstProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "findFirstProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_templates_1.Project_templates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProject_templatesArgs_1.FindManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "findManyProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateProject_templatesArgs_1.CreateProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "createProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProject_templatesArgs_1.CreateManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "createManyProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteProject_templatesArgs_1.DeleteProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "deleteProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateProject_templatesArgs_1.UpdateProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "updateProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProject_templatesArgs_1.DeleteManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "deleteManyProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProject_templatesArgs_1.UpdateManyProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "updateManyProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Project_templates_1.Project_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertProject_templatesArgs_1.UpsertProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "upsertProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProject_templates_1.AggregateProject_templates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProject_templatesArgs_1.AggregateProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "aggregateProject_templates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Project_templatesGroupBy_1.Project_templatesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProject_templatesArgs_1.GroupByProject_templatesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Project_templatesCrudResolver.prototype, "groupByProject_templates", null);
Project_templatesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Project_templates_1.Project_templates)
], Project_templatesCrudResolver);
exports.Project_templatesCrudResolver = Project_templatesCrudResolver;
