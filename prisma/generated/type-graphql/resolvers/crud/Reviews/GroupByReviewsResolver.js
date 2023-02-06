"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByReviewsArgs_1 = require("./args/GroupByReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const ReviewsGroupBy_1 = require("../../outputs/ReviewsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByReviewsResolver = class GroupByReviewsResolver {
    async groupByReviews(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ReviewsGroupBy_1.ReviewsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByReviewsArgs_1.GroupByReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByReviewsResolver.prototype, "groupByReviews", null);
GroupByReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], GroupByReviewsResolver);
exports.GroupByReviewsResolver = GroupByReviewsResolver;
