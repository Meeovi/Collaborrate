"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyWebhooksArgs_1 = require("./args/FindManyWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let FindManyWebhooksResolver = class FindManyWebhooksResolver {
    async findManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindManyWebhooksResolver.prototype, "findManyWebhooks", null);
FindManyWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], FindManyWebhooksResolver);
exports.FindManyWebhooksResolver = FindManyWebhooksResolver;
