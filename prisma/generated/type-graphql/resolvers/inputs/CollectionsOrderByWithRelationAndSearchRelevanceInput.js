"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CollectionsOrderByRelevanceInput_1 = require("../inputs/CollectionsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CollectionsOrderByWithRelationAndSearchRelevanceInput = class CollectionsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "product", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CollectionsOrderByRelevanceInput_1.CollectionsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CollectionsOrderByRelevanceInput_1.CollectionsOrderByRelevanceInput)
], CollectionsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
CollectionsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CollectionsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], CollectionsOrderByWithRelationAndSearchRelevanceInput);
exports.CollectionsOrderByWithRelationAndSearchRelevanceInput = CollectionsOrderByWithRelationAndSearchRelevanceInput;
