"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNewsletter_subscribersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByNewsletter_subscribersArgs_1 = require("./args/GroupByNewsletter_subscribersArgs");
const Newsletter_subscribers_1 = require("../../../models/Newsletter_subscribers");
const Newsletter_subscribersGroupBy_1 = require("../../outputs/Newsletter_subscribersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByNewsletter_subscribersResolver = class GroupByNewsletter_subscribersResolver {
    async groupByNewsletter_subscribers(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletter_subscribers.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Newsletter_subscribersGroupBy_1.Newsletter_subscribersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNewsletter_subscribersArgs_1.GroupByNewsletter_subscribersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByNewsletter_subscribersResolver.prototype, "groupByNewsletter_subscribers", null);
GroupByNewsletter_subscribersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletter_subscribers_1.Newsletter_subscribers)
], GroupByNewsletter_subscribersResolver);
exports.GroupByNewsletter_subscribersResolver = GroupByNewsletter_subscribersResolver;
