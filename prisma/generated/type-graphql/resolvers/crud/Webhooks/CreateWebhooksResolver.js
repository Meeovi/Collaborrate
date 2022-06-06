"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebhooksResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateWebhooksArgs_1 = require("./args/CreateWebhooksArgs");
const Webhooks_1 = require("../../../models/Webhooks");
const helpers_1 = require("../../../helpers");
let CreateWebhooksResolver = class CreateWebhooksResolver {
    async createWebhooks(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateWebhooksArgs_1.CreateWebhooksArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateWebhooksResolver.prototype, "createWebhooks", null);
CreateWebhooksResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Webhooks_1.Webhooks)
], CreateWebhooksResolver);
exports.CreateWebhooksResolver = CreateWebhooksResolver;
