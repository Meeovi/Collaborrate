"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstReviewsArgs_1 = require("./args/FindFirstReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const helpers_1 = require("../../../helpers");
let FindFirstReviewsResolver = class FindFirstReviewsResolver {
    async findFirstReviews(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstReviewsArgs_1.FindFirstReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstReviewsResolver.prototype, "findFirstReviews", null);
FindFirstReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], FindFirstReviewsResolver);
exports.FindFirstReviewsResolver = FindFirstReviewsResolver;
