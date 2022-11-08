"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagsOrderByRelevanceInput_1 = require("../inputs/TagsOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TagsOrderByWithRelationAndSearchRelevanceInput = class TagsOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "excerpt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "categories", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "articles", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "customers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagsOrderByRelevanceInput_1.TagsOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagsOrderByRelevanceInput_1.TagsOrderByRelevanceInput)
], TagsOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
TagsOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagsOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], TagsOrderByWithRelationAndSearchRelevanceInput);
exports.TagsOrderByWithRelationAndSearchRelevanceInput = TagsOrderByWithRelationAndSearchRelevanceInput;
