"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneWebhooksArgs_1 = require("./args/CreateOneWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let CreateOneWebhooksResolver = class CreateOneWebhooksResolver {
    async createOneWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneWebhooksArgs_1.CreateOneWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneWebhooksResolver.prototype, "createOneWebhooks", null);
CreateOneWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], CreateOneWebhooksResolver);
exports.CreateOneWebhooksResolver = CreateOneWebhooksResolver;
