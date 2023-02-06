"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsAvgOrderByAggregateInput_1 = require("../inputs/ReviewsAvgOrderByAggregateInput");
const ReviewsCountOrderByAggregateInput_1 = require("../inputs/ReviewsCountOrderByAggregateInput");
const ReviewsMaxOrderByAggregateInput_1 = require("../inputs/ReviewsMaxOrderByAggregateInput");
const ReviewsMinOrderByAggregateInput_1 = require("../inputs/ReviewsMinOrderByAggregateInput");
const ReviewsSumOrderByAggregateInput_1 = require("../inputs/ReviewsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewsOrderByWithAggregationInput = class ReviewsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsCountOrderByAggregateInput_1.ReviewsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsCountOrderByAggregateInput_1.ReviewsCountOrderByAggregateInput)
], ReviewsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsAvgOrderByAggregateInput_1.ReviewsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsAvgOrderByAggregateInput_1.ReviewsAvgOrderByAggregateInput)
], ReviewsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMaxOrderByAggregateInput_1.ReviewsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMaxOrderByAggregateInput_1.ReviewsMaxOrderByAggregateInput)
], ReviewsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsMinOrderByAggregateInput_1.ReviewsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsMinOrderByAggregateInput_1.ReviewsMinOrderByAggregateInput)
], ReviewsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsSumOrderByAggregateInput_1.ReviewsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsSumOrderByAggregateInput_1.ReviewsSumOrderByAggregateInput)
], ReviewsOrderByWithAggregationInput.prototype, "_sum", void 0);
ReviewsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReviewsOrderByWithAggregationInput);
exports.ReviewsOrderByWithAggregationInput = ReviewsOrderByWithAggregationInput;
