"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsAvgAggregate_1 = require("../outputs/ReviewsAvgAggregate");
const ReviewsCountAggregate_1 = require("../outputs/ReviewsCountAggregate");
const ReviewsMaxAggregate_1 = require("../outputs/ReviewsMaxAggregate");
const ReviewsMinAggregate_1 = require("../outputs/ReviewsMinAggregate");
const ReviewsSumAggregate_1 = require("../outputs/ReviewsSumAggregate");
let ReviewsGroupBy = class ReviewsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsGroupBy.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsGroupBy.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsGroupBy.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ReviewsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCountAggregate_1.ReviewsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsCountAggregate_1.ReviewsCountAggregate)
], ReviewsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsAvgAggregate_1.ReviewsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsAvgAggregate_1.ReviewsAvgAggregate)
], ReviewsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsSumAggregate_1.ReviewsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsSumAggregate_1.ReviewsSumAggregate)
], ReviewsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMinAggregate_1.ReviewsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMinAggregate_1.ReviewsMinAggregate)
], ReviewsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMaxAggregate_1.ReviewsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMaxAggregate_1.ReviewsMaxAggregate)
], ReviewsGroupBy.prototype, "_max", void 0);
ReviewsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewsGroupBy", {
        isAbstract: true
    })
], ReviewsGroupBy);
exports.ReviewsGroupBy = ReviewsGroupBy;
