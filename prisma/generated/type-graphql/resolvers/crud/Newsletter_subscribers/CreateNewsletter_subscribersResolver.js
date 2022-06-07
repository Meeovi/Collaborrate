"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateNewsletter_subscribersArgs_1 = require("./args/CreateNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const helpers_1 = require("../../../helpers");
let CreateNewsletter_subscribersResolver = class CreateNewsletter_subscribersResolver {
    async createNewsletter_subscribers(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Newsletter_subscribers_1.Newsletter_subscribers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateNewsletter_subscribersArgs_1.CreateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateNewsletter_subscribersResolver.prototype, "createNewsletter_subscribers", null);
CreateNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], CreateNewsletter_subscribersResolver);
exports.CreateNewsletter_subscribersResolver = CreateNewsletter_subscribersResolver;