"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCategoriesArgs_1 = require("./args/FindUniqueCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let FindUniqueCategoriesResolver = class FindUniqueCategoriesResolver {
    async findUniqueCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCategoriesArgs_1.FindUniqueCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCategoriesResolver.prototype, "findUniqueCategories", null);
FindUniqueCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], FindUniqueCategoriesResolver);
exports.FindUniqueCategoriesResolver = FindUniqueCategoriesResolver;
