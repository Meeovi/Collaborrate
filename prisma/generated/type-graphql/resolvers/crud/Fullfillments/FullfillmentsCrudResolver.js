"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullfillmentsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateFullfillmentsArgs_1 = require("./args/AggregateFullfillmentsArgs");
const CreateFullfillmentsArgs_1 = require("./args/CreateFullfillmentsArgs");
const CreateManyFullfillmentsArgs_1 = require("./args/CreateManyFullfillmentsArgs");
const DeleteFullfillmentsArgs_1 = require("./args/DeleteFullfillmentsArgs");
const DeleteManyFullfillmentsArgs_1 = require("./args/DeleteManyFullfillmentsArgs");
const FindFirstFullfillmentsArgs_1 = require("./args/FindFirstFullfillmentsArgs");
const FindManyFullfillmentsArgs_1 = require("./args/FindManyFullfillmentsArgs");
const FindUniqueFullfillmentsArgs_1 = require("./args/FindUniqueFullfillmentsArgs");
const GroupByFullfillmentsArgs_1 = require("./args/GroupByFullfillmentsArgs");
const UpdateFullfillmentsArgs_1 = require("./args/UpdateFullfillmentsArgs");
const UpdateManyFullfillmentsArgs_1 = require("./args/UpdateManyFullfillmentsArgs");
const UpsertFullfillmentsArgs_1 = require("./args/UpsertFullfillmentsArgs");
const helpers_1 = require("../../../helpers");
const Fullfillments_1 = require("../../../models/Fullfillments");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateFullfillments_1 = require("../../outputs/AggregateFullfillments");
const FullfillmentsGroupBy_1 = require("../../outputs/FullfillmentsGroupBy");
let FullfillmentsCrudResolver = class FullfillmentsCrudResolver {
    async findUniqueFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertFullfillments(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateFullfillments(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByFullfillments(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).fullfillments.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueFullfillmentsArgs_1.FindUniqueFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findUniqueFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstFullfillmentsArgs_1.FindFirstFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findFirstFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Fullfillments_1.Fullfillments], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyFullfillmentsArgs_1.FindManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "findManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateFullfillmentsArgs_1.CreateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "createFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyFullfillmentsArgs_1.CreateManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "createManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteFullfillmentsArgs_1.DeleteFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "deleteFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateFullfillmentsArgs_1.UpdateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "updateFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyFullfillmentsArgs_1.DeleteManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "deleteManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyFullfillmentsArgs_1.UpdateManyFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "updateManyFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Fullfillments_1.Fullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertFullfillmentsArgs_1.UpsertFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "upsertFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateFullfillments_1.AggregateFullfillments, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateFullfillmentsArgs_1.AggregateFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "aggregateFullfillments", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [FullfillmentsGroupBy_1.FullfillmentsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByFullfillmentsArgs_1.GroupByFullfillmentsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FullfillmentsCrudResolver.prototype, "groupByFullfillments", null);
FullfillmentsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Fullfillments_1.Fullfillments)
], FullfillmentsCrudResolver);
exports.FullfillmentsCrudResolver = FullfillmentsCrudResolver;
