"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CommentsOrderByRelevanceInput_1 = require("../inputs/CommentsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CommentsOrderByWithRelationAndSearchRelevanceInput = class CommentsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "customer_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "response", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "published", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "cust_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "mediamanager", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "trainings", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CommentsOrderByRelevanceInput_1.CommentsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CommentsOrderByRelevanceInput_1.CommentsOrderByRelevanceInput)
], CommentsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CommentsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CommentsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CommentsOrderByWithRelationAndSearchRelevanceInput);
exports.CommentsOrderByWithRelationAndSearchRelevanceInput = CommentsOrderByWithRelationAndSearchRelevanceInput;
