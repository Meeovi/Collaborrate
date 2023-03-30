"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCategoriesArgs_1 = require("./args/DeleteOneCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let DeleteOneCategoriesResolver = class DeleteOneCategoriesResolver {
    async deleteOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Categories_1.Categories, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCategoriesArgs_1.DeleteOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneCategoriesResolver.prototype, "deleteOneCategories", null);
DeleteOneCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], DeleteOneCategoriesResolver);
exports.DeleteOneCategoriesResolver = DeleteOneCategoriesResolver;
