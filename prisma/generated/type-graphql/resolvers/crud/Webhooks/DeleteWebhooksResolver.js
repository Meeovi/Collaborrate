"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteWebhooksArgs_1 = require("./args/DeleteWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let DeleteWebhooksResolver = class DeleteWebhooksResolver {
    async deleteWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.delete({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteWebhooksArgs_1.DeleteWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteWebhooksResolver.prototype, "deleteWebhooks", null);
DeleteWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], DeleteWebhooksResolver);
exports.DeleteWebhooksResolver = DeleteWebhooksResolver;
