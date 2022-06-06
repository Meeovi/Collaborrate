"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsAvgOrderByAggregateInput_1 = require("../inputs/CommentsAvgOrderByAggregateInput");
const CommentsCountOrderByAggregateInput_1 = require("../inputs/CommentsCountOrderByAggregateInput");
const CommentsMaxOrderByAggregateInput_1 = require("../inputs/CommentsMaxOrderByAggregateInput");
const CommentsMinOrderByAggregateInput_1 = require("../inputs/CommentsMinOrderByAggregateInput");
const CommentsSumOrderByAggregateInput_1 = require("../inputs/CommentsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsOrderByWithAggregationInput = class CommentsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithAggregationInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsCountOrderByAggregateInput_1.CommentsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsCountOrderByAggregateInput_1.CommentsCountOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsAvgOrderByAggregateInput_1.CommentsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsAvgOrderByAggregateInput_1.CommentsAvgOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMaxOrderByAggregateInput_1.CommentsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMaxOrderByAggregateInput_1.CommentsMaxOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsMinOrderByAggregateInput_1.CommentsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsMinOrderByAggregateInput_1.CommentsMinOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsSumOrderByAggregateInput_1.CommentsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsSumOrderByAggregateInput_1.CommentsSumOrderByAggregateInput)
], CommentsOrderByWithAggregationInput.prototype, "_sum", void 0);
CommentsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsOrderByWithAggregationInput", {
        isAbstract: true
    })
], CommentsOrderByWithAggregationInput);
exports.CommentsOrderByWithAggregationInput = CommentsOrderByWithAggregationInput;
