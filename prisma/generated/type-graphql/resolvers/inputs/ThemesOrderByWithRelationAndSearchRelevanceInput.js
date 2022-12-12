"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesOrderByRelevanceInput_1 = require("../inputs/ThemesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThemesOrderByWithRelationAndSearchRelevanceInput = class ThemesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "website_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesOrderByRelevanceInput_1.ThemesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesOrderByRelevanceInput_1.ThemesOrderByRelevanceInput)
], ThemesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
ThemesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], ThemesOrderByWithRelationAndSearchRelevanceInput);
exports.ThemesOrderByWithRelationAndSearchRelevanceInput = ThemesOrderByWithRelationAndSearchRelevanceInput;
