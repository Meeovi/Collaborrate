"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateWebhooksArgs_1 = require("./args/AggregateWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const AggregateWebhooks_1 = require("../../outputs/AggregateWebhooks");
const helpers_1 = require("../../../helpers");
let AggregateWebhooksResolver = class AggregateWebhooksResolver {
    async aggregateWebhooks(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
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
], AggregateWebhooksResolver.prototype, "aggregateWebhooks", null);
AggregateWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], AggregateWebhooksResolver);
exports.AggregateWebhooksResolver = AggregateWebhooksResolver;
