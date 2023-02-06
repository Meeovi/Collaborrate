"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueReviewsArgs_1 = require("./args/FindUniqueReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let FindUniqueReviewsResolver = class FindUniqueReviewsResolver {
    async findUniqueReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Reviews_1.Reviews, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueReviewsArgs_1.FindUniqueReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueReviewsResolver.prototype, "findUniqueReviews", null);
FindUniqueReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], FindUniqueReviewsResolver);
exports.FindUniqueReviewsResolver = FindUniqueReviewsResolver;
