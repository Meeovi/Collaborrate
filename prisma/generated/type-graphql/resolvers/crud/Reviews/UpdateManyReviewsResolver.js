"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyReviewsArgs_1 = require("./args/UpdateManyReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyReviewsResolver = class UpdateManyReviewsResolver {
    async updateManyReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyReviewsArgs_1.UpdateManyReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyReviewsResolver.prototype, "updateManyReviews", null);
UpdateManyReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], UpdateManyReviewsResolver);
exports.UpdateManyReviewsResolver = UpdateManyReviewsResolver;
