"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingOrderByRelevanceFieldEnum_1 = require("../../enums/RatingOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let RatingOrderByRelevanceInput = class RatingOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RatingOrderByRelevanceFieldEnum_1.RatingOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], RatingOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByRelevanceInput.prototype, "search", void 0);
RatingOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingOrderByRelevanceInput", {
        isAbstract: true
    })
], RatingOrderByRelevanceInput);
exports.RatingOrderByRelevanceInput = RatingOrderByRelevanceInput;
