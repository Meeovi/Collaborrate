"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateShopsArgs_1 = require("./args/AggregateShopsArgs");
const CreateManyShopsArgs_1 = require("./args/CreateManyShopsArgs");
const CreateShopsArgs_1 = require("./args/CreateShopsArgs");
const DeleteManyShopsArgs_1 = require("./args/DeleteManyShopsArgs");
const DeleteShopsArgs_1 = require("./args/DeleteShopsArgs");
const FindFirstShopsArgs_1 = require("./args/FindFirstShopsArgs");
const FindManyShopsArgs_1 = require("./args/FindManyShopsArgs");
const FindUniqueShopsArgs_1 = require("./args/FindUniqueShopsArgs");
const GroupByShopsArgs_1 = require("./args/GroupByShopsArgs");
const UpdateManyShopsArgs_1 = require("./args/UpdateManyShopsArgs");
const UpdateShopsArgs_1 = require("./args/UpdateShopsArgs");
const UpsertShopsArgs_1 = require("./args/UpsertShopsArgs");
const helpers_1 = require("../../../helpers");
const Shops_1 = require("../../../models/Shops");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateShops_1 = require("../../outputs/AggregateShops");
const ShopsGroupBy_1 = require("../../outputs/ShopsGroupBy");
let ShopsCrudResolver = class ShopsCrudResolver {
    async findUniqueShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertShops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateShops(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByShops(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shops.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shops_1.Shops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueShopsArgs_1.FindUniqueShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "findUniqueShops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Shops_1.Shops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstShopsArgs_1.FindFirstShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "findFirstShops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Shops_1.Shops], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyShopsArgs_1.FindManyShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "findManyShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateShopsArgs_1.CreateShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "createShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyShopsArgs_1.CreateManyShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "createManyShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteShopsArgs_1.DeleteShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "deleteShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateShopsArgs_1.UpdateShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "updateShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyShopsArgs_1.DeleteManyShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "deleteManyShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyShopsArgs_1.UpdateManyShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "updateManyShops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Shops_1.Shops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertShopsArgs_1.UpsertShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "upsertShops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateShops_1.AggregateShops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateShopsArgs_1.AggregateShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "aggregateShops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ShopsGroupBy_1.ShopsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByShopsArgs_1.GroupByShopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ShopsCrudResolver.prototype, "groupByShops", null);
ShopsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Shops_1.Shops)
], ShopsCrudResolver);
exports.ShopsCrudResolver = ShopsCrudResolver;
