"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateNewsletter_subscribersArgs_1 = require("./args/UpdateNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const helpers_1 = require("../../../helpers");
let UpdateNewsletter_subscribersResolver = class UpdateNewsletter_subscribersResolver {
    async updateNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateNewsletter_subscribersArgs_1.UpdateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateNewsletter_subscribersResolver.prototype, "updateNewsletter_subscribers", null);
UpdateNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], UpdateNewsletter_subscribersResolver);
exports.UpdateNewsletter_subscribersResolver = UpdateNewsletter_subscribersResolver;
