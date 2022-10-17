"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsOrderByRelevanceFieldEnum_1 = require("../../enums/ReviewsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewsOrderByRelevanceInput = class ReviewsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewsOrderByRelevanceFieldEnum_1.ReviewsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByRelevanceInput.prototype, "search", void 0);
ReviewsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsOrderByRelevanceInput", {
        isAbstract: true
    })
], ReviewsOrderByRelevanceInput);
exports.ReviewsOrderByRelevanceInput = ReviewsOrderByRelevanceInput;
