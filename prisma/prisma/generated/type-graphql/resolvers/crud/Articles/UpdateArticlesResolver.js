"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticlesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateArticlesArgs_1 = require("./args/UpdateArticlesArgs");
const Articles_1 = require("../../../models/Articles");
const helpers_1 = require("../../../helpers");
let UpdateArticlesResolver = class UpdateArticlesResolver {
    async updateArticles(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).articles.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateArticlesArgs_1.UpdateArticlesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateArticlesResolver.prototype, "updateArticles", null);
UpdateArticlesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Articles_1.Articles)
], UpdateArticlesResolver);
exports.UpdateArticlesResolver = UpdateArticlesResolver;
