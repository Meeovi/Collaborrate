"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateAttributesArgs_1 = require("./args/AggregateAttributesArgs");
const CreateManyAttributesArgs_1 = require("./args/CreateManyAttributesArgs");
const CreateOneAttributesArgs_1 = require("./args/CreateOneAttributesArgs");
const DeleteManyAttributesArgs_1 = require("./args/DeleteManyAttributesArgs");
const DeleteOneAttributesArgs_1 = require("./args/DeleteOneAttributesArgs");
const FindFirstAttributesArgs_1 = require("./args/FindFirstAttributesArgs");
const FindFirstAttributesOrThrowArgs_1 = require("./args/FindFirstAttributesOrThrowArgs");
const FindManyAttributesArgs_1 = require("./args/FindManyAttributesArgs");
const FindUniqueAttributesArgs_1 = require("./args/FindUniqueAttributesArgs");
const FindUniqueAttributesOrThrowArgs_1 = require("./args/FindUniqueAttributesOrThrowArgs");
const GroupByAttributesArgs_1 = require("./args/GroupByAttributesArgs");
const UpdateManyAttributesArgs_1 = require("./args/UpdateManyAttributesArgs");
const UpdateOneAttributesArgs_1 = require("./args/UpdateOneAttributesArgs");
const UpsertOneAttributesArgs_1 = require("./args/UpsertOneAttributesArgs");
const helpers_1 = require("../../../helpers");
const Attributes_1 = require("../../../models/Attributes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAttributes_1 = require("../../outputs/AggregateAttributes");
const AttributesGroupBy_1 = require("../../outputs/AttributesGroupBy");
let AttributesCrudResolver = class AttributesCrudResolver {
    async aggregateAttributes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAttributesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueAttributesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAttributes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAttributes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).attributes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateAttributes_1.AggregateAttributes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateAttributesArgs_1.AggregateAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "aggregateAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyAttributesArgs_1.CreateManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "createManyAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAttributesArgs_1.CreateOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "createOneAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyAttributesArgs_1.DeleteManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "deleteManyAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneAttributesArgs_1.DeleteOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "deleteOneAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAttributesArgs_1.FindFirstAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "findFirstAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstAttributesOrThrowArgs_1.FindFirstAttributesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "findFirstAttributesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Attributes_1.Attributes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyAttributesArgs_1.FindManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "findManyAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttributesArgs_1.FindUniqueAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "findUniqueAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueAttributesOrThrowArgs_1.FindUniqueAttributesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "findUniqueAttributesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [AttributesGroupBy_1.AttributesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByAttributesArgs_1.GroupByAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "groupByAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyAttributesArgs_1.UpdateManyAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "updateManyAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneAttributesArgs_1.UpdateOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "updateOneAttributes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Attributes_1.Attributes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneAttributesArgs_1.UpsertOneAttributesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AttributesCrudResolver.prototype, "upsertOneAttributes", null);
AttributesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Attributes_1.Attributes)
], AttributesCrudResolver);
exports.AttributesCrudResolver = AttributesCrudResolver;
