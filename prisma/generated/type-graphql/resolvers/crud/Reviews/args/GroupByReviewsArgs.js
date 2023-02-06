"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReviewsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsOrderByWithAggregationInput_1 = require("../../../inputs/ReviewsOrderByWithAggregationInput");
const ReviewsScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReviewsScalarWhereWithAggregatesInput");
const ReviewsWhereInput_1 = require("../../../inputs/ReviewsWhereInput");
const ReviewsScalarFieldEnum_1 = require("../../../../enums/ReviewsScalarFieldEnum");
let GroupByReviewsArgs = class GroupByReviewsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsWhereInput_1.ReviewsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsWhereInput_1.ReviewsWhereInput)
], GroupByReviewsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsOrderByWithAggregationInput_1.ReviewsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReviewsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsScalarFieldEnum_1.ReviewsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReviewsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsScalarWhereWithAggregatesInput_1.ReviewsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsScalarWhereWithAggregatesInput_1.ReviewsScalarWhereWithAggregatesInput)
], GroupByReviewsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReviewsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReviewsArgs.prototype, "skip", void 0);
GroupByReviewsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReviewsArgs);
exports.GroupByReviewsArgs = GroupByReviewsArgs;
