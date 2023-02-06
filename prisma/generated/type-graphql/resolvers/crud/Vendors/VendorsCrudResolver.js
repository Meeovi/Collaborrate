"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateVendorsArgs_1 = require("./args/AggregateVendorsArgs");
const CreateManyVendorsArgs_1 = require("./args/CreateManyVendorsArgs");
const CreateOneVendorsArgs_1 = require("./args/CreateOneVendorsArgs");
const DeleteManyVendorsArgs_1 = require("./args/DeleteManyVendorsArgs");
const DeleteOneVendorsArgs_1 = require("./args/DeleteOneVendorsArgs");
const FindFirstVendorsArgs_1 = require("./args/FindFirstVendorsArgs");
const FindFirstVendorsOrThrowArgs_1 = require("./args/FindFirstVendorsOrThrowArgs");
const FindManyVendorsArgs_1 = require("./args/FindManyVendorsArgs");
const FindUniqueVendorsArgs_1 = require("./args/FindUniqueVendorsArgs");
const FindUniqueVendorsOrThrowArgs_1 = require("./args/FindUniqueVendorsOrThrowArgs");
const GroupByVendorsArgs_1 = require("./args/GroupByVendorsArgs");
const UpdateManyVendorsArgs_1 = require("./args/UpdateManyVendorsArgs");
const UpdateOneVendorsArgs_1 = require("./args/UpdateOneVendorsArgs");
const UpsertOneVendorsArgs_1 = require("./args/UpsertOneVendorsArgs");
const helpers_1 = require("../../../helpers");
const Vendors_1 = require("../../../models/Vendors");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateVendors_1 = require("../../outputs/AggregateVendors");
const VendorsGroupBy_1 = require("../../outputs/VendorsGroupBy");
let VendorsCrudResolver = class VendorsCrudResolver {
    async aggregateVendors(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstVendorsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueVendorsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByVendors(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneVendors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).vendors.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateVendors_1.AggregateVendors, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateVendorsArgs_1.AggregateVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "aggregateVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyVendorsArgs_1.CreateManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "createManyVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneVendorsArgs_1.CreateOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "createOneVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyVendorsArgs_1.DeleteManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "deleteManyVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneVendorsArgs_1.DeleteOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "deleteOneVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVendorsArgs_1.FindFirstVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "findFirstVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstVendorsOrThrowArgs_1.FindFirstVendorsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "findFirstVendorsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Vendors_1.Vendors], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyVendorsArgs_1.FindManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "findManyVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVendorsArgs_1.FindUniqueVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "findUniqueVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueVendorsOrThrowArgs_1.FindUniqueVendorsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "findUniqueVendorsOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [VendorsGroupBy_1.VendorsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByVendorsArgs_1.GroupByVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "groupByVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyVendorsArgs_1.UpdateManyVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "updateManyVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneVendorsArgs_1.UpdateOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "updateOneVendors", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Vendors_1.Vendors, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneVendorsArgs_1.UpsertOneVendorsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], VendorsCrudResolver.prototype, "upsertOneVendors", null);
VendorsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Vendors_1.Vendors)
], VendorsCrudResolver);
exports.VendorsCrudResolver = VendorsCrudResolver;
