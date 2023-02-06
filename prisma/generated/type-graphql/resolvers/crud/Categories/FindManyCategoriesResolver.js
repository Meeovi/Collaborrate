"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCategoriesArgs_1 = require("./args/FindManyCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let FindManyCategoriesResolver = class FindManyCategoriesResolver {
    async findManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Categories_1.Categories], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCategoriesArgs_1.FindManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCategoriesResolver.prototype, "findManyCategories", null);
FindManyCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], FindManyCategoriesResolver);
exports.FindManyCategoriesResolver = FindManyCategoriesResolver;
