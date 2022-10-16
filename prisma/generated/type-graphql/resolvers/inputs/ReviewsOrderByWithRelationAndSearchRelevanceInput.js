"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewsOrderByRelevanceInput_1 = require("../inputs/ReviewsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewsOrderByWithRelationAndSearchRelevanceInput = class ReviewsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "first_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "last_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "shop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "comment_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewsOrderByRelevanceInput_1.ReviewsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewsOrderByRelevanceInput_1.ReviewsOrderByRelevanceInput)
], ReviewsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ReviewsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ReviewsOrderByWithRelationAndSearchRelevanceInput);
exports.ReviewsOrderByWithRelationAndSearchRelevanceInput = ReviewsOrderByWithRelationAndSearchRelevanceInput;
