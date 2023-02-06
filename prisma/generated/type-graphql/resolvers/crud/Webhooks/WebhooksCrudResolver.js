"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWebhooksArgs_1 = require("./args/AggregateWebhooksArgs");
const CreateManyWebhooksArgs_1 = require("./args/CreateManyWebhooksArgs");
const CreateOneWebhooksArgs_1 = require("./args/CreateOneWebhooksArgs");
const DeleteManyWebhooksArgs_1 = require("./args/DeleteManyWebhooksArgs");
const DeleteOneWebhooksArgs_1 = require("./args/DeleteOneWebhooksArgs");
const FindFirstWebhooksArgs_1 = require("./args/FindFirstWebhooksArgs");
const FindFirstWebhooksOrThrowArgs_1 = require("./args/FindFirstWebhooksOrThrowArgs");
const FindManyWebhooksArgs_1 = require("./args/FindManyWebhooksArgs");
const FindUniqueWebhooksArgs_1 = require("./args/FindUniqueWebhooksArgs");
const FindUniqueWebhooksOrThrowArgs_1 = require("./args/FindUniqueWebhooksOrThrowArgs");
const GroupByWebhooksArgs_1 = require("./args/GroupByWebhooksArgs");
const UpdateManyWebhooksArgs_1 = require("./args/UpdateManyWebhooksArgs");
const UpdateOneWebhooksArgs_1 = require("./args/UpdateOneWebhooksArgs");
const UpsertOneWebhooksArgs_1 = require("./args/UpsertOneWebhooksArgs");
const helpers_1 = require("../../../helpers");
const Webhooks_1 = require("../../../models/Webhooks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateWebhooks_1 = require("../../outputs/AggregateWebhooks");
const WebhooksGroupBy_1 = require("../../outputs/WebhooksGroupBy");
let WebhooksCrudResolver = class WebhooksCrudResolver {
    async aggregateWebhooks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstWebhooksOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueWebhooksOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByWebhooks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWebhooksArgs_1.CreateOneWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "createOneWebhooks", null);
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
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneWebhooksArgs_1.DeleteOneWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "deleteOneWebhooks", null);
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
    TypeGraphQL.Query(_returns => Webhooks_1.Webhooks, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstWebhooksOrThrowArgs_1.FindFirstWebhooksOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "findFirstWebhooksOrThrow", null);
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWebhooksOrThrowArgs_1.FindUniqueWebhooksOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "findUniqueWebhooksOrThrow", null);
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
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneWebhooksArgs_1.UpdateOneWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "updateOneWebhooks", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Webhooks_1.Webhooks, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneWebhooksArgs_1.UpsertOneWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], WebhooksCrudResolver.prototype, "upsertOneWebhooks", null);
WebhooksCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], WebhooksCrudResolver);
exports.WebhooksCrudResolver = WebhooksCrudResolver;
