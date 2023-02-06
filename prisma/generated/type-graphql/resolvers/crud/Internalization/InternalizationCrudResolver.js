"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalizationCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateInternalizationArgs_1 = require("./args/AggregateInternalizationArgs");
const CreateManyInternalizationArgs_1 = require("./args/CreateManyInternalizationArgs");
const CreateOneInternalizationArgs_1 = require("./args/CreateOneInternalizationArgs");
const DeleteManyInternalizationArgs_1 = require("./args/DeleteManyInternalizationArgs");
const DeleteOneInternalizationArgs_1 = require("./args/DeleteOneInternalizationArgs");
const FindFirstInternalizationArgs_1 = require("./args/FindFirstInternalizationArgs");
const FindFirstInternalizationOrThrowArgs_1 = require("./args/FindFirstInternalizationOrThrowArgs");
const FindManyInternalizationArgs_1 = require("./args/FindManyInternalizationArgs");
const FindUniqueInternalizationArgs_1 = require("./args/FindUniqueInternalizationArgs");
const FindUniqueInternalizationOrThrowArgs_1 = require("./args/FindUniqueInternalizationOrThrowArgs");
const GroupByInternalizationArgs_1 = require("./args/GroupByInternalizationArgs");
const UpdateManyInternalizationArgs_1 = require("./args/UpdateManyInternalizationArgs");
const UpdateOneInternalizationArgs_1 = require("./args/UpdateOneInternalizationArgs");
const UpsertOneInternalizationArgs_1 = require("./args/UpsertOneInternalizationArgs");
const helpers_1 = require("../../../helpers");
const Internalization_1 = require("../../../models/Internalization");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateInternalization_1 = require("../../outputs/AggregateInternalization");
const InternalizationGroupBy_1 = require("../../outputs/InternalizationGroupBy");
let InternalizationCrudResolver = class InternalizationCrudResolver {
    async aggregateInternalization(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstInternalizationOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async internalizations(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async internalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByInternalization(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneInternalization(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).internalization.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneInternalizationArgs_1.CreateOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "createOneInternalization", null);
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
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneInternalizationArgs_1.DeleteOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "deleteOneInternalization", null);
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
    TypeGraphQL.Query(_returns => Internalization_1.Internalization, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstInternalizationOrThrowArgs_1.FindFirstInternalizationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "findFirstInternalizationOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueInternalizationOrThrowArgs_1.FindUniqueInternalizationOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "getInternalization", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneInternalizationArgs_1.UpdateOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "updateOneInternalization", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Internalization_1.Internalization, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneInternalizationArgs_1.UpsertOneInternalizationArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], InternalizationCrudResolver.prototype, "upsertOneInternalization", null);
InternalizationCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Internalization_1.Internalization)
], InternalizationCrudResolver);
exports.InternalizationCrudResolver = InternalizationCrudResolver;
