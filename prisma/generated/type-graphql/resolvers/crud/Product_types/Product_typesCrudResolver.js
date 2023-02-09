"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product_typesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateProduct_typesArgs_1 = require("./args/AggregateProduct_typesArgs");
const CreateManyProduct_typesArgs_1 = require("./args/CreateManyProduct_typesArgs");
const CreateOneProduct_typesArgs_1 = require("./args/CreateOneProduct_typesArgs");
const DeleteManyProduct_typesArgs_1 = require("./args/DeleteManyProduct_typesArgs");
const DeleteOneProduct_typesArgs_1 = require("./args/DeleteOneProduct_typesArgs");
const FindFirstProduct_typesArgs_1 = require("./args/FindFirstProduct_typesArgs");
const FindFirstProduct_typesOrThrowArgs_1 = require("./args/FindFirstProduct_typesOrThrowArgs");
const FindManyProduct_typesArgs_1 = require("./args/FindManyProduct_typesArgs");
const FindUniqueProduct_typesArgs_1 = require("./args/FindUniqueProduct_typesArgs");
const FindUniqueProduct_typesOrThrowArgs_1 = require("./args/FindUniqueProduct_typesOrThrowArgs");
const GroupByProduct_typesArgs_1 = require("./args/GroupByProduct_typesArgs");
const UpdateManyProduct_typesArgs_1 = require("./args/UpdateManyProduct_typesArgs");
const UpdateOneProduct_typesArgs_1 = require("./args/UpdateOneProduct_typesArgs");
const UpsertOneProduct_typesArgs_1 = require("./args/UpsertOneProduct_typesArgs");
const helpers_1 = require("../../../helpers");
const Product_types_1 = require("../../../models/Product_types");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateProduct_types_1 = require("../../outputs/AggregateProduct_types");
const Product_typesGroupBy_1 = require("../../outputs/Product_typesGroupBy");
let Product_typesCrudResolver = class Product_typesCrudResolver {
    async aggregateProduct_types(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstProduct_typesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueProduct_typesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByProduct_types(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneProduct_types(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).product_types.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateProduct_types_1.AggregateProduct_types, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateProduct_typesArgs_1.AggregateProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "aggregateProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyProduct_typesArgs_1.CreateManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "createManyProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProduct_typesArgs_1.CreateOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "createOneProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyProduct_typesArgs_1.DeleteManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "deleteManyProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneProduct_typesArgs_1.DeleteOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "deleteOneProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_typesArgs_1.FindFirstProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "findFirstProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstProduct_typesOrThrowArgs_1.FindFirstProduct_typesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "findFirstProduct_typesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_types_1.Product_types], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyProduct_typesArgs_1.FindManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "findManyProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProduct_typesArgs_1.FindUniqueProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "findUniqueProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueProduct_typesOrThrowArgs_1.FindUniqueProduct_typesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "findUniqueProduct_typesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Product_typesGroupBy_1.Product_typesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByProduct_typesArgs_1.GroupByProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "groupByProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyProduct_typesArgs_1.UpdateManyProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "updateManyProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneProduct_typesArgs_1.UpdateOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "updateOneProduct_types", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Product_types_1.Product_types, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneProduct_typesArgs_1.UpsertOneProduct_typesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Product_typesCrudResolver.prototype, "upsertOneProduct_types", null);
Product_typesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_types_1.Product_types)
], Product_typesCrudResolver);
exports.Product_typesCrudResolver = Product_typesCrudResolver;
