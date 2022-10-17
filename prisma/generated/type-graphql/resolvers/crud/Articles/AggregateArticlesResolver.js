"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateArticlesArgs_1 = require("./args/AggregateArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const AggregateArticles_1 = require("../../outputs/AggregateArticles");
const helpers_1 = require("../../../helpers");
let AggregateArticlesResolver = class AggregateArticlesResolver {
    async aggregateArticles(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateArticles_1.AggregateArticles, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateArticlesArgs_1.AggregateArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateArticlesResolver.prototype, "aggregateArticles", null);
AggregateArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], AggregateArticlesResolver);
exports.AggregateArticlesResolver = AggregateArticlesResolver;
