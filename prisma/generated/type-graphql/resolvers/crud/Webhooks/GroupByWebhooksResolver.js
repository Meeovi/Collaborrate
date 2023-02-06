"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByWebhooksArgs_1 = require("./args/GroupByWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const WebhooksGroupBy_1 = require("../../outputs/WebhooksGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByWebhooksResolver = class GroupByWebhooksResolver {
    async groupByWebhooks(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
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
], GroupByWebhooksResolver.prototype, "groupByWebhooks", null);
GroupByWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], GroupByWebhooksResolver);
exports.GroupByWebhooksResolver = GroupByWebhooksResolver;
