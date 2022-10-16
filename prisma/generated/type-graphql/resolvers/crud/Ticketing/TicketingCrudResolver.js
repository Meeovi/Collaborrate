"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTicketingArgs_1 = require("./args/AggregateTicketingArgs");
const CreateManyTicketingArgs_1 = require("./args/CreateManyTicketingArgs");
const CreateOneTicketingArgs_1 = require("./args/CreateOneTicketingArgs");
const DeleteManyTicketingArgs_1 = require("./args/DeleteManyTicketingArgs");
const DeleteOneTicketingArgs_1 = require("./args/DeleteOneTicketingArgs");
const FindFirstTicketingArgs_1 = require("./args/FindFirstTicketingArgs");
const FindManyTicketingArgs_1 = require("./args/FindManyTicketingArgs");
const FindUniqueTicketingArgs_1 = require("./args/FindUniqueTicketingArgs");
const GroupByTicketingArgs_1 = require("./args/GroupByTicketingArgs");
const UpdateManyTicketingArgs_1 = require("./args/UpdateManyTicketingArgs");
const UpdateOneTicketingArgs_1 = require("./args/UpdateOneTicketingArgs");
const UpsertOneTicketingArgs_1 = require("./args/UpsertOneTicketingArgs");
const helpers_1 = require("../../../helpers");
const Ticketing_1 = require("../../../models/Ticketing");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTicketing_1 = require("../../outputs/AggregateTicketing");
const TicketingGroupBy_1 = require("../../outputs/TicketingGroupBy");
let TicketingCrudResolver = class TicketingCrudResolver {
    async aggregateTicketing(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createManyTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ticketings(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async ticketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTicketing(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTicketing(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).ticketing.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTicketing_1.AggregateTicketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTicketingArgs_1.AggregateTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "aggregateTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTicketingArgs_1.CreateManyTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "createManyTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTicketingArgs_1.CreateOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "createOneTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTicketingArgs_1.DeleteManyTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "deleteManyTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTicketingArgs_1.DeleteOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "deleteOneTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ticketing_1.Ticketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTicketingArgs_1.FindFirstTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "findFirstTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Ticketing_1.Ticketing], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTicketingArgs_1.FindManyTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "ticketings", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Ticketing_1.Ticketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTicketingArgs_1.FindUniqueTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "ticketing", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TicketingGroupBy_1.TicketingGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTicketingArgs_1.GroupByTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "groupByTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTicketingArgs_1.UpdateManyTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "updateManyTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTicketingArgs_1.UpdateOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "updateOneTicketing", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Ticketing_1.Ticketing, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTicketingArgs_1.UpsertOneTicketingArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TicketingCrudResolver.prototype, "upsertOneTicketing", null);
TicketingCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Ticketing_1.Ticketing)
], TicketingCrudResolver);
exports.TicketingCrudResolver = TicketingCrudResolver;
