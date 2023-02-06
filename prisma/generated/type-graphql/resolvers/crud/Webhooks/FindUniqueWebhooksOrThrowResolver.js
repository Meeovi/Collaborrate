"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueWebhooksOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueWebhooksOrThrowArgs_1 = require("./args/FindUniqueWebhooksOrThrowArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let FindUniqueWebhooksOrThrowResolver = class FindUniqueWebhooksOrThrowResolver {
    async findUniqueWebhooksOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueWebhooksOrThrowArgs_1.FindUniqueWebhooksOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueWebhooksOrThrowResolver.prototype, "findUniqueWebhooksOrThrow", null);
FindUniqueWebhooksOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], FindUniqueWebhooksOrThrowResolver);
exports.FindUniqueWebhooksOrThrowResolver = FindUniqueWebhooksOrThrowResolver;
