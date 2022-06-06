"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateEventsArgs_1 = require("./args/AggregateEventsArgs");
const CreateEventsArgs_1 = require("./args/CreateEventsArgs");
const CreateManyEventsArgs_1 = require("./args/CreateManyEventsArgs");
const DeleteEventsArgs_1 = require("./args/DeleteEventsArgs");
const DeleteManyEventsArgs_1 = require("./args/DeleteManyEventsArgs");
const FindFirstEventsArgs_1 = require("./args/FindFirstEventsArgs");
const FindManyEventsArgs_1 = require("./args/FindManyEventsArgs");
const FindUniqueEventsArgs_1 = require("./args/FindUniqueEventsArgs");
const GroupByEventsArgs_1 = require("./args/GroupByEventsArgs");
const UpdateEventsArgs_1 = require("./args/UpdateEventsArgs");
const UpdateManyEventsArgs_1 = require("./args/UpdateManyEventsArgs");
const UpsertEventsArgs_1 = require("./args/UpsertEventsArgs");
const helpers_1 = require("../../../helpers");
const Events_1 = require("../../../models/Events");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateEvents_1 = require("../../outputs/AggregateEvents");
const EventsGroupBy_1 = require("../../outputs/EventsGroupBy");
let EventsCrudResolver = class EventsCrudResolver {
    async findUniqueEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertEvents(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateEvents(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).events.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByEvents(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).events.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueEventsArgs_1.FindUniqueEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "findUniqueEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstEventsArgs_1.FindFirstEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "findFirstEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Events_1.Events], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyEventsArgs_1.FindManyEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "findManyEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateEventsArgs_1.CreateEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "createEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyEventsArgs_1.CreateManyEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "createManyEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteEventsArgs_1.DeleteEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "deleteEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateEventsArgs_1.UpdateEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "updateEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyEventsArgs_1.DeleteManyEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "deleteManyEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyEventsArgs_1.UpdateManyEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "updateManyEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Events_1.Events, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertEventsArgs_1.UpsertEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "upsertEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateEvents_1.AggregateEvents, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateEventsArgs_1.AggregateEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "aggregateEvents", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [EventsGroupBy_1.EventsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByEventsArgs_1.GroupByEventsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], EventsCrudResolver.prototype, "groupByEvents", null);
EventsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Events_1.Events)
], EventsCrudResolver);
exports.EventsCrudResolver = EventsCrudResolver;
