"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PagesOrderByRelevanceInput_1 = require("../inputs/PagesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PagesOrderByWithRelationAndSearchRelevanceInput = class PagesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "enable_page", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "content_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "url_key", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_keywords", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "meta_description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PagesOrderByRelevanceInput_1.PagesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PagesOrderByRelevanceInput_1.PagesOrderByRelevanceInput)
], PagesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
PagesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PagesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], PagesOrderByWithRelationAndSearchRelevanceInput);
exports.PagesOrderByWithRelationAndSearchRelevanceInput = PagesOrderByWithRelationAndSearchRelevanceInput;
