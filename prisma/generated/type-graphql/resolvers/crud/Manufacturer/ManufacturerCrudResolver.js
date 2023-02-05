"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateManufacturerArgs_1 = require("./args/AggregateManufacturerArgs");
const CreateManyManufacturerArgs_1 = require("./args/CreateManyManufacturerArgs");
const CreateOneManufacturerArgs_1 = require("./args/CreateOneManufacturerArgs");
const DeleteManyManufacturerArgs_1 = require("./args/DeleteManyManufacturerArgs");
const DeleteOneManufacturerArgs_1 = require("./args/DeleteOneManufacturerArgs");
const FindFirstManufacturerArgs_1 = require("./args/FindFirstManufacturerArgs");
const FindFirstManufacturerOrThrowArgs_1 = require("./args/FindFirstManufacturerOrThrowArgs");
const FindManyManufacturerArgs_1 = require("./args/FindManyManufacturerArgs");
const FindUniqueManufacturerArgs_1 = require("./args/FindUniqueManufacturerArgs");
const FindUniqueManufacturerOrThrowArgs_1 = require("./args/FindUniqueManufacturerOrThrowArgs");
const GroupByManufacturerArgs_1 = require("./args/GroupByManufacturerArgs");
const UpdateManyManufacturerArgs_1 = require("./args/UpdateManyManufacturerArgs");
const UpdateOneManufacturerArgs_1 = require("./args/UpdateOneManufacturerArgs");
const UpsertOneManufacturerArgs_1 = require("./args/UpsertOneManufacturerArgs");
const helpers_1 = require("../../../helpers");
const Manufacturer_1 = require("../../../models/Manufacturer");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateManufacturer_1 = require("../../outputs/AggregateManufacturer");
const ManufacturerGroupBy_1 = require("../../outputs/ManufacturerGroupBy");
let ManufacturerCrudResolver = class ManufacturerCrudResolver {
    async aggregateManufacturer(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstManufacturerOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async manufacturers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async manufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByManufacturer(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneManufacturer(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).manufacturer.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateManufacturer_1.AggregateManufacturer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateManufacturerArgs_1.AggregateManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "aggregateManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyManufacturerArgs_1.CreateManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "createManyManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneManufacturerArgs_1.CreateOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "createOneManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyManufacturerArgs_1.DeleteManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "deleteManyManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneManufacturerArgs_1.DeleteOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "deleteOneManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstManufacturerArgs_1.FindFirstManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "findFirstManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstManufacturerOrThrowArgs_1.FindFirstManufacturerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "findFirstManufacturerOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Manufacturer_1.Manufacturer], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyManufacturerArgs_1.FindManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "manufacturers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueManufacturerArgs_1.FindUniqueManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "manufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueManufacturerOrThrowArgs_1.FindUniqueManufacturerOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "getManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ManufacturerGroupBy_1.ManufacturerGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByManufacturerArgs_1.GroupByManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "groupByManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyManufacturerArgs_1.UpdateManyManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "updateManyManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneManufacturerArgs_1.UpdateOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "updateOneManufacturer", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Manufacturer_1.Manufacturer, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneManufacturerArgs_1.UpsertOneManufacturerArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ManufacturerCrudResolver.prototype, "upsertOneManufacturer", null);
ManufacturerCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Manufacturer_1.Manufacturer)
], ManufacturerCrudResolver);
exports.ManufacturerCrudResolver = ManufacturerCrudResolver;
