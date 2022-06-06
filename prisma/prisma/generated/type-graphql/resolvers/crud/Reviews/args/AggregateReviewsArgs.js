"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsOrderByWithRelationInput_1 = require("../../../inputs/ReviewsOrderByWithRelationInput");
const ReviewsWhereInput_1 = require("../../../inputs/ReviewsWhereInput");
const ReviewsWhereUniqueInput_1 = require("../../../inputs/ReviewsWhereUniqueInput");
let AggregateReviewsArgs = class AggregateReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereInput_1.ReviewsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereInput_1.ReviewsWhereInput)
], AggregateReviewsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsOrderByWithRelationInput_1.ReviewsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReviewsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereUniqueInput_1.ReviewsWhereUniqueInput)
], AggregateReviewsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReviewsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReviewsArgs.prototype, "skip", void 0);
AggregateReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReviewsArgs);
exports.AggregateReviewsArgs = AggregateReviewsArgs;
