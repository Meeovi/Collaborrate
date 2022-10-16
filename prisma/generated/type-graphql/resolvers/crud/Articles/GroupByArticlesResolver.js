"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByArticlesArgs_1 = require("./args/GroupByArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const ArticlesGroupBy_1 = require("../../outputs/ArticlesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByArticlesResolver = class GroupByArticlesResolver {
    async groupByArticles(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ArticlesGroupBy_1.ArticlesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByArticlesArgs_1.GroupByArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByArticlesResolver.prototype, "groupByArticles", null);
GroupByArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], GroupByArticlesResolver);
exports.GroupByArticlesResolver = GroupByArticlesResolver;
