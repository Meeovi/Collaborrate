"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ThemesOrderByRelationAggregateInput = class ThemesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ThemesOrderByRelationAggregateInput.prototype, "_count", void 0);
ThemesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ThemesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], ThemesOrderByRelationAggregateInput);
exports.ThemesOrderByRelationAggregateInput = ThemesOrderByRelationAggregateInput;
