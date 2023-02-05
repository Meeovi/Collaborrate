"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyWebhooksArgs_1 = require("./args/UpdateManyWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyWebhooksResolver = class UpdateManyWebhooksResolver {
    async updateManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpdateManyWebhooksResolver.prototype, "updateManyWebhooks", null);
UpdateManyWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], UpdateManyWebhooksResolver);
exports.UpdateManyWebhooksResolver = UpdateManyWebhooksResolver;
