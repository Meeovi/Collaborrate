"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewsSumOrderByAggregateInput = class ReviewsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewsSumOrderByAggregateInput.prototype, "id", void 0);
ReviewsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewsSumOrderByAggregateInput", {
        isAbstract: true
    })
], ReviewsSumOrderByAggregateInput);
exports.ReviewsSumOrderByAggregateInput = ReviewsSumOrderByAggregateInput;
