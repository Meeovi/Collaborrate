"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateNewsletter_subscribersArgs_1 = require("./args/AggregateNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const AggregateNewsletter_subscribers_1 = require("../../outputs/AggregateNewsletter_subscribers");
const helpers_1 = require("../../../helpers");
let AggregateNewsletter_subscribersResolver = class AggregateNewsletter_subscribersResolver {
    async aggregateNewsletter_subscribers(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateNewsletter_subscribers_1.AggregateNewsletter_subscribers, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateNewsletter_subscribersArgs_1.AggregateNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateNewsletter_subscribersResolver.prototype, "aggregateNewsletter_subscribers", null);
AggregateNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], AggregateNewsletter_subscribersResolver);
exports.AggregateNewsletter_subscribersResolver = AggregateNewsletter_subscribersResolver;
