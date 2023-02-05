"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCategoriesArgs_1 = require("./args/UpdateOneCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const helpers_1 = require("../../../helpers");
let UpdateOneCategoriesResolver = class UpdateOneCategoriesResolver {
    async updateOneCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCategoriesArgs_1.UpdateOneCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCategoriesResolver.prototype, "updateOneCategories", null);
UpdateOneCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], UpdateOneCategoriesResolver);
exports.UpdateOneCategoriesResolver = UpdateOneCategoriesResolver;
