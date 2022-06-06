"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateReturnsArgs_1 = require("./args/AggregateReturnsArgs");
const CreateManyReturnsArgs_1 = require("./args/CreateManyReturnsArgs");
const CreateReturnsArgs_1 = require("./args/CreateReturnsArgs");
const DeleteManyReturnsArgs_1 = require("./args/DeleteManyReturnsArgs");
const DeleteReturnsArgs_1 = require("./args/DeleteReturnsArgs");
const FindFirstReturnsArgs_1 = require("./args/FindFirstReturnsArgs");
const FindManyReturnsArgs_1 = require("./args/FindManyReturnsArgs");
const FindUniqueReturnsArgs_1 = require("./args/FindUniqueReturnsArgs");
const GroupByReturnsArgs_1 = require("./args/GroupByReturnsArgs");
const UpdateManyReturnsArgs_1 = require("./args/UpdateManyReturnsArgs");
const UpdateReturnsArgs_1 = require("./args/UpdateReturnsArgs");
const UpsertReturnsArgs_1 = require("./args/UpsertReturnsArgs");
const helpers_1 = require("../../../helpers");
const Returns_1 = require("../../../models/Returns");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateReturns_1 = require("../../outputs/AggregateReturns");
const ReturnsGroupBy_1 = require("../../outputs/ReturnsGroupBy");
let ReturnsCrudResolver = class ReturnsCrudResolver {
    async findUniqueReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertReturns(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateReturns(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByReturns(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).returns.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReturnsArgs_1.FindUniqueReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findUniqueReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReturnsArgs_1.FindFirstReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findFirstReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Returns_1.Returns], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyReturnsArgs_1.FindManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "findManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateReturnsArgs_1.CreateReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "createReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyReturnsArgs_1.CreateManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "createManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteReturnsArgs_1.DeleteReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "deleteReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateReturnsArgs_1.UpdateReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "updateReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyReturnsArgs_1.DeleteManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "deleteManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReturnsArgs_1.UpdateManyReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "updateManyReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Returns_1.Returns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertReturnsArgs_1.UpsertReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "upsertReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReturns_1.AggregateReturns, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReturnsArgs_1.AggregateReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "aggregateReturns", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReturnsGroupBy_1.ReturnsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReturnsArgs_1.GroupByReturnsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], ReturnsCrudResolver.prototype, "groupByReturns", null);
ReturnsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Returns_1.Returns)
], ReturnsCrudResolver);
exports.ReturnsCrudResolver = ReturnsCrudResolver;
