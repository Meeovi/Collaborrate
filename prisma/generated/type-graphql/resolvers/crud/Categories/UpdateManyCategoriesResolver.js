"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCategoriesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCategoriesArgs_1 = require("./args/UpdateManyCategoriesArgs");
const Categories_1 = require("../../../models/Categories");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCategoriesResolver = class UpdateManyCategoriesResolver {
    async updateManyCategories(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).categories.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCategoriesArgs_1.UpdateManyCategoriesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCategoriesResolver.prototype, "updateManyCategories", null);
UpdateManyCategoriesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Categories_1.Categories)
], UpdateManyCategoriesResolver);
exports.UpdateManyCategoriesResolver = UpdateManyCategoriesResolver;
