"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesAvgOrderByAggregateInput_1 = require("../inputs/ThemesAvgOrderByAggregateInput");
const ThemesCountOrderByAggregateInput_1 = require("../inputs/ThemesCountOrderByAggregateInput");
const ThemesMaxOrderByAggregateInput_1 = require("../inputs/ThemesMaxOrderByAggregateInput");
const ThemesMinOrderByAggregateInput_1 = require("../inputs/ThemesMinOrderByAggregateInput");
const ThemesSumOrderByAggregateInput_1 = require("../inputs/ThemesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ThemesOrderByWithAggregationInput = class ThemesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "parent_theme", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "theme_path", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "action", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "website_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByWithAggregationInput.prototype, "websites", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesCountOrderByAggregateInput_1.ThemesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesCountOrderByAggregateInput_1.ThemesCountOrderByAggregateInput)
], ThemesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesAvgOrderByAggregateInput_1.ThemesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesAvgOrderByAggregateInput_1.ThemesAvgOrderByAggregateInput)
], ThemesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMaxOrderByAggregateInput_1.ThemesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMaxOrderByAggregateInput_1.ThemesMaxOrderByAggregateInput)
], ThemesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesMinOrderByAggregateInput_1.ThemesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesMinOrderByAggregateInput_1.ThemesMinOrderByAggregateInput)
], ThemesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesSumOrderByAggregateInput_1.ThemesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesSumOrderByAggregateInput_1.ThemesSumOrderByAggregateInput)
], ThemesOrderByWithAggregationInput.prototype, "_sum", void 0);
ThemesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesOrderByWithAggregationInput", {
        isAbstract: true
    })
], ThemesOrderByWithAggregationInput);
exports.ThemesOrderByWithAggregationInput = ThemesOrderByWithAggregationInput;
