"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThemesSumOrderByAggregateInput = class ThemesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesSumOrderByAggregateInput.prototype, "website_id", void 0);
ThemesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesSumOrderByAggregateInput", {
        isAbstract: true
    })
], ThemesSumOrderByAggregateInput);
exports.ThemesSumOrderByAggregateInput = ThemesSumOrderByAggregateInput;
