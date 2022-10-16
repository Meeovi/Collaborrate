"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RatingOrderByRelevanceInput_1 = require("../inputs/RatingOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RatingOrderByWithRelationAndSearchRelevanceInput = class RatingOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "default_value", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "default_store_view", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "rating_visibility", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "sort_order", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "prod_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RatingOrderByRelevanceInput_1.RatingOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RatingOrderByRelevanceInput_1.RatingOrderByRelevanceInput)
], RatingOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
RatingOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RatingOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], RatingOrderByWithRelationAndSearchRelevanceInput);
exports.RatingOrderByWithRelationAndSearchRelevanceInput = RatingOrderByWithRelationAndSearchRelevanceInput;
