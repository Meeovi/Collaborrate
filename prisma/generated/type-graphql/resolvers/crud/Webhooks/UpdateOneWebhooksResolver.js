"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneWebhooksArgs_1 = require("./args/UpdateOneWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let UpdateOneWebhooksResolver = class UpdateOneWebhooksResolver {
    async updateOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateOneWebhooksResolver.prototype, "updateOneWebhooks", null);
UpdateOneWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], UpdateOneWebhooksResolver);
exports.UpdateOneWebhooksResolver = UpdateOneWebhooksResolver;
