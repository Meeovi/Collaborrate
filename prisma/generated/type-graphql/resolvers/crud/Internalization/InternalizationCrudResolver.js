"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateInternalizationArgs_1 = require("./args/AggregateInternalizationArgs");
const CreateInternalizationArgs_1 = require("./args/CreateInternalizationArgs");
const CreateManyInternalizationArgs_1 = require("./args/CreateManyInternalizationArgs");
const DeleteInternalizationArgs_1 = require("./args/DeleteInternalizationArgs");
const DeleteManyInternalizationArgs_1 = require("./args/DeleteManyInternalizationArgs");
const FindFirstInternalizationArgs_1 = require("./args/FindFirstInternalizationArgs");
const FindManyInternalizationArgs_1 = require("./args/FindManyInternalizationArgs");
const FindUniqueInternalizationArgs_1 = require("./args/FindUniqueInternalizationArgs");
const GroupByInternalizationArgs_1 = require("./args/GroupByInternalizationArgs");
const UpdateInternalizationArgs_1 = require("./args/UpdateInternalizationArgs");
const UpdateManyInternalizationArgs_1 = require("./args/UpdateManyInternalizationArgs");
const UpsertInternalizationArgs_1 = require("./args/UpsertInternalizationArgs");
const helpers_1 = require("../../../helpers");
const Internalization_1 = require("../../../models/Internalization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInternalization_1 = require("../../outputs/AggregateInternalization");
const InternalizationGroupBy_1 = require("../../outputs/InternalizationGroupBy");
let InternalizationCrudResolver = class InternalizationCrudResolver {
    async internalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async internalizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateInternalization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByInternalization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInternalizationArgs_1.FindUniqueInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "internalization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInternalizationArgs_1.FindFirstInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "findFirstInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Internalization_1.Internalization], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyInternalizationArgs_1.FindManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "internalizations", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateInternalizationArgs_1.CreateInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "createInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyInternalizationArgs_1.CreateManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "createManyInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteInternalizationArgs_1.DeleteInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "deleteInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateInternalizationArgs_1.UpdateInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "updateInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyInternalizationArgs_1.DeleteManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "deleteManyInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyInternalizationArgs_1.UpdateManyInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "updateManyInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertInternalizationArgs_1.UpsertInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "upsertInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateInternalization_1.AggregateInternalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateInternalizationArgs_1.AggregateInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "aggregateInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [InternalizationGroupBy_1.InternalizationGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByInternalizationArgs_1.GroupByInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "groupByInternalization", null);
InternalizationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], InternalizationCrudResolver);
exports.InternalizationCrudResolver = InternalizationCrudResolver;
