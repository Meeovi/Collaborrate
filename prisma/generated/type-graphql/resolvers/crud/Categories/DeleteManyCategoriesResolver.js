"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCategoriesArgs_1 = require("./args/DeleteManyCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCategoriesResolver = class DeleteManyCategoriesResolver {
    async deleteManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCategoriesArgs_1.DeleteManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCategoriesResolver.prototype, "deleteManyCategories", null);
DeleteManyCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], DeleteManyCategoriesResolver);
exports.DeleteManyCategoriesResolver = DeleteManyCategoriesResolver;
