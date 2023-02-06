"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReviewsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateReviewsArgs_1 = require("./args/AggregateReviewsArgs");
const Reviews_1 = require("../../../models/Reviews");
const AggregateReviews_1 = require("../../outputs/AggregateReviews");
const helpers_1 = require("../../../helpers");
let AggregateReviewsResolver = class AggregateReviewsResolver {
    async aggregateReviews(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).reviews.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateReviews_1.AggregateReviews, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateReviewsArgs_1.AggregateReviewsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateReviewsResolver.prototype, "aggregateReviews", null);
AggregateReviewsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Reviews_1.Reviews)
], AggregateReviewsResolver);
exports.AggregateReviewsResolver = AggregateReviewsResolver;
