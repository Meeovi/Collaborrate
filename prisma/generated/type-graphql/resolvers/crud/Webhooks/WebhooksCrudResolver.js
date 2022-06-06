"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateWebhooksArgs_1 = require("./args/AggregateWebhooksArgs");
const CreateManyWebhooksArgs_1 = require("./args/CreateManyWebhooksArgs");
const CreateWebhooksArgs_1 = require("./args/CreateWebhooksArgs");
const DeleteManyWebhooksArgs_1 = require("./args/DeleteManyWebhooksArgs");
const DeleteWebhooksArgs_1 = require("./args/DeleteWebhooksArgs");
const FindFirstWebhooksArgs_1 = require("./args/FindFirstWebhooksArgs");
const FindManyWebhooksArgs_1 = require("./args/FindManyWebhooksArgs");
const FindUniqueWebhooksArgs_1 = require("./args/FindUniqueWebhooksArgs");
const GroupByWebhooksArgs_1 = require("./args/GroupByWebhooksArgs");
const UpdateManyWebhooksArgs_1 = require("./args/UpdateManyWebhooksArgs");
const UpdateWebhooksArgs_1 = require("./args/UpdateWebhooksArgs");
const UpsertWebhooksArgs_1 = require("./args/UpsertWebhooksArgs");
const helpers_1 = require("../../../helpers");
const Webhooks_1 = require("../../../models/Webhooks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWebhooks_1 = require("../../outputs/AggregateWebhooks");
const WebhooksGroupBy_1 = require("../../outputs/WebhooksGroupBy");
let WebhooksCrudResolver = class WebhooksCrudResolver {
    async findUniqueWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateWebhooks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByWebhooks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWebhooksArgs_1.FindUniqueWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "findUniqueWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWebhooksArgs_1.FindFirstWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "findFirstWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Webhooks_1.Webhooks], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyWebhooksArgs_1.FindManyWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "findManyWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWebhooksArgs_1.CreateWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "createWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWebhooksArgs_1.CreateManyWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "createManyWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWebhooksArgs_1.DeleteWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "deleteWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateWebhooksArgs_1.UpdateWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "updateWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyWebhooksArgs_1.DeleteManyWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "deleteManyWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyWebhooksArgs_1.UpdateManyWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "updateManyWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertWebhooksArgs_1.UpsertWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "upsertWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateWebhooks_1.AggregateWebhooks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateWebhooksArgs_1.AggregateWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "aggregateWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [WebhooksGroupBy_1.WebhooksGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByWebhooksArgs_1.GroupByWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "groupByWebhooks", null);
WebhooksCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], WebhooksCrudResolver);
exports.WebhooksCrudResolver = WebhooksCrudResolver;
