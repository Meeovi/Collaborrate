"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteArticlesArgs_1 = require("./args/DeleteArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const helpers_1 = require("../../../helpers");
let DeleteArticlesResolver = class DeleteArticlesResolver {
    async deleteArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Articles_1.Articles, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteArticlesArgs_1.DeleteArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteArticlesResolver.prototype, "deleteArticles", null);
DeleteArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], DeleteArticlesResolver);
exports.DeleteArticlesResolver = DeleteArticlesResolver;
