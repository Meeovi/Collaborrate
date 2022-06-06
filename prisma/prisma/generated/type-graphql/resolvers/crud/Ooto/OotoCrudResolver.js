"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateOotoArgs_1 = require("./args/AggregateOotoArgs");
const CreateManyOotoArgs_1 = require("./args/CreateManyOotoArgs");
const CreateOotoArgs_1 = require("./args/CreateOotoArgs");
const DeleteManyOotoArgs_1 = require("./args/DeleteManyOotoArgs");
const DeleteOotoArgs_1 = require("./args/DeleteOotoArgs");
const FindFirstOotoArgs_1 = require("./args/FindFirstOotoArgs");
const FindManyOotoArgs_1 = require("./args/FindManyOotoArgs");
const FindUniqueOotoArgs_1 = require("./args/FindUniqueOotoArgs");
const GroupByOotoArgs_1 = require("./args/GroupByOotoArgs");
const UpdateManyOotoArgs_1 = require("./args/UpdateManyOotoArgs");
const UpdateOotoArgs_1 = require("./args/UpdateOotoArgs");
const UpsertOotoArgs_1 = require("./args/UpsertOotoArgs");
const helpers_1 = require("../../../helpers");
const Ooto_1 = require("../../../models/Ooto");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateOoto_1 = require("../../outputs/AggregateOoto");
const OotoGroupBy_1 = require("../../outputs/OotoGroupBy");
let OotoCrudResolver = class OotoCrudResolver {
    async ooto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ootos(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOoto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateOoto(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByOoto(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ooto.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueOotoArgs_1.FindUniqueOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "ooto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstOotoArgs_1.FindFirstOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "findFirstOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Ooto_1.Ooto], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyOotoArgs_1.FindManyOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "ootos", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOotoArgs_1.CreateOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "createOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyOotoArgs_1.CreateManyOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "createManyOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOotoArgs_1.DeleteOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "deleteOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOotoArgs_1.UpdateOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "updateOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyOotoArgs_1.DeleteManyOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "deleteManyOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyOotoArgs_1.UpdateManyOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "updateManyOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ooto_1.Ooto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOotoArgs_1.UpsertOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "upsertOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateOoto_1.AggregateOoto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateOotoArgs_1.AggregateOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "aggregateOoto", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [OotoGroupBy_1.OotoGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByOotoArgs_1.GroupByOotoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], OotoCrudResolver.prototype, "groupByOoto", null);
OotoCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ooto_1.Ooto)
], OotoCrudResolver);
exports.OotoCrudResolver = OotoCrudResolver;
