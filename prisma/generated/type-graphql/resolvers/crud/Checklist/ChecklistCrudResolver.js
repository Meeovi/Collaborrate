"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateChecklistArgs_1 = require("./args/AggregateChecklistArgs");
const CreateManyChecklistArgs_1 = require("./args/CreateManyChecklistArgs");
const CreateOneChecklistArgs_1 = require("./args/CreateOneChecklistArgs");
const DeleteManyChecklistArgs_1 = require("./args/DeleteManyChecklistArgs");
const DeleteOneChecklistArgs_1 = require("./args/DeleteOneChecklistArgs");
const FindFirstChecklistArgs_1 = require("./args/FindFirstChecklistArgs");
const FindManyChecklistArgs_1 = require("./args/FindManyChecklistArgs");
const FindUniqueChecklistArgs_1 = require("./args/FindUniqueChecklistArgs");
const GroupByChecklistArgs_1 = require("./args/GroupByChecklistArgs");
const UpdateManyChecklistArgs_1 = require("./args/UpdateManyChecklistArgs");
const UpdateOneChecklistArgs_1 = require("./args/UpdateOneChecklistArgs");
const UpsertOneChecklistArgs_1 = require("./args/UpsertOneChecklistArgs");
const helpers_1 = require("../../../helpers");
const Checklist_1 = require("../../../models/Checklist");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateChecklist_1 = require("../../outputs/AggregateChecklist");
const ChecklistGroupBy_1 = require("../../outputs/ChecklistGroupBy");
let ChecklistCrudResolver = class ChecklistCrudResolver {
    async aggregateChecklist(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async checklists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async checklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByChecklist(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneChecklist(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).checklist.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChecklist_1.AggregateChecklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChecklistArgs_1.AggregateChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "aggregateChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyChecklistArgs_1.CreateManyChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "createManyChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChecklistArgs_1.CreateOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "createOneChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyChecklistArgs_1.DeleteManyChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "deleteManyChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneChecklistArgs_1.DeleteOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "deleteOneChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstChecklistArgs_1.FindFirstChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "findFirstChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Checklist_1.Checklist], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyChecklistArgs_1.FindManyChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "checklists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueChecklistArgs_1.FindUniqueChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "checklist", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChecklistGroupBy_1.ChecklistGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChecklistArgs_1.GroupByChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "groupByChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyChecklistArgs_1.UpdateManyChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "updateManyChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneChecklistArgs_1.UpdateOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "updateOneChecklist", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Checklist_1.Checklist, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneChecklistArgs_1.UpsertOneChecklistArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ChecklistCrudResolver.prototype, "upsertOneChecklist", null);
ChecklistCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Checklist_1.Checklist)
], ChecklistCrudResolver);
exports.ChecklistCrudResolver = ChecklistCrudResolver;
