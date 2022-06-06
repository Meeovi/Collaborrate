"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyArticlesArgs_1 = require("./args/FindManyArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const helpers_1 = require("../../../helpers");
let FindManyArticlesResolver = class FindManyArticlesResolver {
    async findManyArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Articles_1.Articles], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyArticlesArgs_1.FindManyArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyArticlesResolver.prototype, "findManyArticles", null);
FindManyArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], FindManyArticlesResolver);
exports.FindManyArticlesResolver = FindManyArticlesResolver;
