"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCategoriesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCategoriesOrThrowArgs_1 = require("./args/FindFirstCategoriesOrThrowArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let FindFirstCategoriesOrThrowResolver = class FindFirstCategoriesOrThrowResolver {
    async findFirstCategoriesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCategoriesOrThrowArgs_1.FindFirstCategoriesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCategoriesOrThrowResolver.prototype, "findFirstCategoriesOrThrow", null);
FindFirstCategoriesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], FindFirstCategoriesOrThrowResolver);
exports.FindFirstCategoriesOrThrowResolver = FindFirstCategoriesOrThrowResolver;
