"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateDeepdiveArgs_1 = require("./args/AggregateDeepdiveArgs");
const CreateManyDeepdiveArgs_1 = require("./args/CreateManyDeepdiveArgs");
const CreateOneDeepdiveArgs_1 = require("./args/CreateOneDeepdiveArgs");
const DeleteManyDeepdiveArgs_1 = require("./args/DeleteManyDeepdiveArgs");
const DeleteOneDeepdiveArgs_1 = require("./args/DeleteOneDeepdiveArgs");
const FindFirstDeepdiveArgs_1 = require("./args/FindFirstDeepdiveArgs");
const FindManyDeepdiveArgs_1 = require("./args/FindManyDeepdiveArgs");
const FindUniqueDeepdiveArgs_1 = require("./args/FindUniqueDeepdiveArgs");
const GroupByDeepdiveArgs_1 = require("./args/GroupByDeepdiveArgs");
const UpdateManyDeepdiveArgs_1 = require("./args/UpdateManyDeepdiveArgs");
const UpdateOneDeepdiveArgs_1 = require("./args/UpdateOneDeepdiveArgs");
const UpsertOneDeepdiveArgs_1 = require("./args/UpsertOneDeepdiveArgs");
const helpers_1 = require("../../../helpers");
const Deepdive_1 = require("../../../models/Deepdive");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDeepdive_1 = require("../../outputs/AggregateDeepdive");
const DeepdiveGroupBy_1 = require("../../outputs/DeepdiveGroupBy");
let DeepdiveCrudResolver = class DeepdiveCrudResolver {
    async aggregateDeepdive(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deepdives(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByDeepdive(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneDeepdive(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).deepdive.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateDeepdive_1.AggregateDeepdive, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateDeepdiveArgs_1.AggregateDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "aggregateDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyDeepdiveArgs_1.CreateManyDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "createManyDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneDeepdiveArgs_1.CreateOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "createOneDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyDeepdiveArgs_1.DeleteManyDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "deleteManyDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneDeepdiveArgs_1.DeleteOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "deleteOneDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstDeepdiveArgs_1.FindFirstDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "findFirstDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Deepdive_1.Deepdive], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyDeepdiveArgs_1.FindManyDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "deepdives", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueDeepdiveArgs_1.FindUniqueDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "deepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [DeepdiveGroupBy_1.DeepdiveGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByDeepdiveArgs_1.GroupByDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "groupByDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyDeepdiveArgs_1.UpdateManyDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "updateManyDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneDeepdiveArgs_1.UpdateOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "updateOneDeepdive", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Deepdive_1.Deepdive, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneDeepdiveArgs_1.UpsertOneDeepdiveArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeepdiveCrudResolver.prototype, "upsertOneDeepdive", null);
DeepdiveCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Deepdive_1.Deepdive)
], DeepdiveCrudResolver);
exports.DeepdiveCrudResolver = DeepdiveCrudResolver;
