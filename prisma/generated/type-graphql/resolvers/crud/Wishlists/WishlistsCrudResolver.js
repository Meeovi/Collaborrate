"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWishlistsArgs_1 = require("./args/AggregateWishlistsArgs");
const CreateManyWishlistsArgs_1 = require("./args/CreateManyWishlistsArgs");
const CreateOneWishlistsArgs_1 = require("./args/CreateOneWishlistsArgs");
const DeleteManyWishlistsArgs_1 = require("./args/DeleteManyWishlistsArgs");
const DeleteOneWishlistsArgs_1 = require("./args/DeleteOneWishlistsArgs");
const FindFirstWishlistsArgs_1 = require("./args/FindFirstWishlistsArgs");
const FindFirstWishlistsOrThrowArgs_1 = require("./args/FindFirstWishlistsOrThrowArgs");
const FindManyWishlistsArgs_1 = require("./args/FindManyWishlistsArgs");
const FindUniqueWishlistsArgs_1 = require("./args/FindUniqueWishlistsArgs");
const FindUniqueWishlistsOrThrowArgs_1 = require("./args/FindUniqueWishlistsOrThrowArgs");
const GroupByWishlistsArgs_1 = require("./args/GroupByWishlistsArgs");
const UpdateManyWishlistsArgs_1 = require("./args/UpdateManyWishlistsArgs");
const UpdateOneWishlistsArgs_1 = require("./args/UpdateOneWishlistsArgs");
const UpsertOneWishlistsArgs_1 = require("./args/UpsertOneWishlistsArgs");
const helpers_1 = require("../../../helpers");
const Wishlists_1 = require("../../../models/Wishlists");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWishlists_1 = require("../../outputs/AggregateWishlists");
const WishlistsGroupBy_1 = require("../../outputs/WishlistsGroupBy");
let WishlistsCrudResolver = class WishlistsCrudResolver {
    async aggregateWishlists(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWishlistsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWishlistsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWishlists(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWishlists(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).wishlists.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWishlists_1.AggregateWishlists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWishlistsArgs_1.AggregateWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "aggregateWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWishlistsArgs_1.CreateManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "createManyWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWishlistsArgs_1.CreateOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "createOneWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWishlistsArgs_1.DeleteManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "deleteManyWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWishlistsArgs_1.DeleteOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "deleteOneWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWishlistsArgs_1.FindFirstWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "findFirstWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWishlistsOrThrowArgs_1.FindFirstWishlistsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "findFirstWishlistsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Wishlists_1.Wishlists], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWishlistsArgs_1.FindManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "findManyWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWishlistsArgs_1.FindUniqueWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "findUniqueWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWishlistsOrThrowArgs_1.FindUniqueWishlistsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "findUniqueWishlistsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WishlistsGroupBy_1.WishlistsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWishlistsArgs_1.GroupByWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "groupByWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWishlistsArgs_1.UpdateManyWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "updateManyWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWishlistsArgs_1.UpdateOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "updateOneWishlists", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Wishlists_1.Wishlists, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWishlistsArgs_1.UpsertOneWishlistsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WishlistsCrudResolver.prototype, "upsertOneWishlists", null);
WishlistsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Wishlists_1.Wishlists)
], WishlistsCrudResolver);
exports.WishlistsCrudResolver = WishlistsCrudResolver;
