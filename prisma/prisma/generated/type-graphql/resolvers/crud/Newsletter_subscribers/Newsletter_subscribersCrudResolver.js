"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newsletter_subscribersCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNewsletter_subscribersArgs_1 = require("./args/AggregateNewsletter_subscribersArgs");
const CreateManyNewsletter_subscribersArgs_1 = require("./args/CreateManyNewsletter_subscribersArgs");
const CreateNewsletter_subscribersArgs_1 = require("./args/CreateNewsletter_subscribersArgs");
const DeleteManyNewsletter_subscribersArgs_1 = require("./args/DeleteManyNewsletter_subscribersArgs");
const DeleteNewsletter_subscribersArgs_1 = require("./args/DeleteNewsletter_subscribersArgs");
const FindFirstNewsletter_subscribersArgs_1 = require("./args/FindFirstNewsletter_subscribersArgs");
const FindManyNewsletter_subscribersArgs_1 = require("./args/FindManyNewsletter_subscribersArgs");
const FindUniqueNewsletter_subscribersArgs_1 = require("./args/FindUniqueNewsletter_subscribersArgs");
const GroupByNewsletter_subscribersArgs_1 = require("./args/GroupByNewsletter_subscribersArgs");
const UpdateManyNewsletter_subscribersArgs_1 = require("./args/UpdateManyNewsletter_subscribersArgs");
const UpdateNewsletter_subscribersArgs_1 = require("./args/UpdateNewsletter_subscribersArgs");
const UpsertNewsletter_subscribersArgs_1 = require("./args/UpsertNewsletter_subscribersArgs");
const helpers_1 = require("../../../helpers");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateNewsletter_subscribers_1 = require("../../outputs/AggregateNewsletter_subscribers");
const Newsletter_subscribersGroupBy_1 = require("../../outputs/Newsletter_subscribersGroupBy");
let Newsletter_subscribersCrudResolver = class Newsletter_subscribersCrudResolver {
    async findUniqueNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateNewsletter_subscribers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByNewsletter_subscribers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueNewsletter_subscribersArgs_1.FindUniqueNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "findUniqueNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstNewsletter_subscribersArgs_1.FindFirstNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "findFirstNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Newsletter_subscribers_1.Newsletter_subscribers], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyNewsletter_subscribersArgs_1.FindManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "findManyNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNewsletter_subscribersArgs_1.CreateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "createNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyNewsletter_subscribersArgs_1.CreateManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "createManyNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteNewsletter_subscribersArgs_1.DeleteNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "deleteNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateNewsletter_subscribersArgs_1.UpdateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "updateNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyNewsletter_subscribersArgs_1.DeleteManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "deleteManyNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyNewsletter_subscribersArgs_1.UpdateManyNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "updateManyNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertNewsletter_subscribersArgs_1.UpsertNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "upsertNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNewsletter_subscribers_1.AggregateNewsletter_subscribers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNewsletter_subscribersArgs_1.AggregateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "aggregateNewsletter_subscribers", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Newsletter_subscribersGroupBy_1.Newsletter_subscribersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNewsletter_subscribersArgs_1.GroupByNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Newsletter_subscribersCrudResolver.prototype, "groupByNewsletter_subscribers", null);
Newsletter_subscribersCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], Newsletter_subscribersCrudResolver);
exports.Newsletter_subscribersCrudResolver = Newsletter_subscribersCrudResolver;
