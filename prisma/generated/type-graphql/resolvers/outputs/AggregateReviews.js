"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReviews = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsAvgAggregate_1 = require("../outputs/ReviewsAvgAggregate");
const ReviewsCountAggregate_1 = require("../outputs/ReviewsCountAggregate");
const ReviewsMaxAggregate_1 = require("../outputs/ReviewsMaxAggregate");
const ReviewsMinAggregate_1 = require("../outputs/ReviewsMinAggregate");
const ReviewsSumAggregate_1 = require("../outputs/ReviewsSumAggregate");
let AggregateReviews = class AggregateReviews {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCountAggregate_1.ReviewsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsCountAggregate_1.ReviewsCountAggregate)
], AggregateReviews.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsAvgAggregate_1.ReviewsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsAvgAggregate_1.ReviewsAvgAggregate)
], AggregateReviews.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsSumAggregate_1.ReviewsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsSumAggregate_1.ReviewsSumAggregate)
], AggregateReviews.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMinAggregate_1.ReviewsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMinAggregate_1.ReviewsMinAggregate)
], AggregateReviews.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMaxAggregate_1.ReviewsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMaxAggregate_1.ReviewsMaxAggregate)
], AggregateReviews.prototype, "_max", void 0);
AggregateReviews = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReviews", {
        isAbstract: true
    })
], AggregateReviews);
exports.AggregateReviews = AggregateReviews;
