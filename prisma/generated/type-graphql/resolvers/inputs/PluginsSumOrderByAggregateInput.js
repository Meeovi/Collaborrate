"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let PluginsSumOrderByAggregateInput = class PluginsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsSumOrderByAggregateInput.prototype, "id", void 0);
PluginsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PluginsSumOrderByAggregateInput", {
        isAbstract: true
    })
], PluginsSumOrderByAggregateInput);
exports.PluginsSumOrderByAggregateInput = PluginsSumOrderByAggregateInput;
