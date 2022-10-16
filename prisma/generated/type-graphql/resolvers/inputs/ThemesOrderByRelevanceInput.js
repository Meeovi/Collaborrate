"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const ThemesOrderByRelevanceFieldEnum_1 = require("../../enums/ThemesOrderByRelevanceFieldEnum");
let ThemesOrderByRelevanceInput = class ThemesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ThemesOrderByRelevanceFieldEnum_1.ThemesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], ThemesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByRelevanceInput.prototype, "search", void 0);
ThemesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesOrderByRelevanceInput", {
        isAbstract: true
    })
], ThemesOrderByRelevanceInput);
exports.ThemesOrderByRelevanceInput = ThemesOrderByRelevanceInput;
