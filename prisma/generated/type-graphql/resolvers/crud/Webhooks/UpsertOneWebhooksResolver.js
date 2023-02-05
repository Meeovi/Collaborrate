"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneWebhooksArgs_1 = require("./args/UpsertOneWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let UpsertOneWebhooksResolver = class UpsertOneWebhooksResolver {
    async upsertOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneWebhooksResolver.prototype, "upsertOneWebhooks", null);
UpsertOneWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], UpsertOneWebhooksResolver);
exports.UpsertOneWebhooksResolver = UpsertOneWebhooksResolver;
