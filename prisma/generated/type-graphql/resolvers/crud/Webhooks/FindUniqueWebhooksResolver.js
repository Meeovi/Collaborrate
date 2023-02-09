"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWebhooksArgs_1 = require("./args/FindUniqueWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let FindUniqueWebhooksResolver = class FindUniqueWebhooksResolver {
    async findUniqueWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], FindUniqueWebhooksResolver.prototype, "findUniqueWebhooks", null);
FindUniqueWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], FindUniqueWebhooksResolver);
exports.FindUniqueWebhooksResolver = FindUniqueWebhooksResolver;
