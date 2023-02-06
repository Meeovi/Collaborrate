"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyWebhooksArgs_1 = require("./args/CreateManyWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyWebhooksResolver = class CreateManyWebhooksResolver {
    async createManyWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).webhooks.createMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyWebhooksArgs_1.CreateManyWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyWebhooksResolver.prototype, "createManyWebhooks", null);
CreateManyWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], CreateManyWebhooksResolver);
exports.CreateManyWebhooksResolver = CreateManyWebhooksResolver;
