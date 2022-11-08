"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByNewslettersResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByNewslettersArgs_1 = require("./args/GroupByNewslettersArgs");
const Newsletters_1 = require("../../../models/Newsletters");
const NewslettersGroupBy_1 = require("../../outputs/NewslettersGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByNewslettersResolver = class GroupByNewslettersResolver {
    async groupByNewsletters(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).newsletters.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [NewslettersGroupBy_1.NewslettersGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByNewslettersArgs_1.GroupByNewslettersArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByNewslettersResolver.prototype, "groupByNewsletters", null);
GroupByNewslettersResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Newsletters_1.Newsletters)
], GroupByNewslettersResolver);
exports.GroupByNewslettersResolver = GroupByNewslettersResolver;
