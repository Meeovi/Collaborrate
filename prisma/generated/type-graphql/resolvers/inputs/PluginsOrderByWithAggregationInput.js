"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsAvgOrderByAggregateInput_1 = require("../inputs/PluginsAvgOrderByAggregateInput");
const PluginsCountOrderByAggregateInput_1 = require("../inputs/PluginsCountOrderByAggregateInput");
const PluginsMaxOrderByAggregateInput_1 = require("../inputs/PluginsMaxOrderByAggregateInput");
const PluginsMinOrderByAggregateInput_1 = require("../inputs/PluginsMinOrderByAggregateInput");
const PluginsSumOrderByAggregateInput_1 = require("../inputs/PluginsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PluginsOrderByWithAggregationInput = class PluginsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "github_link", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "logo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "screenshots", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "last_updated", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "publisher_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "agree_terms", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PluginsOrderByWithAggregationInput.prototype, "publisher_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsCountOrderByAggregateInput_1.PluginsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsCountOrderByAggregateInput_1.PluginsCountOrderByAggregateInput)
], PluginsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsAvgOrderByAggregateInput_1.PluginsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsAvgOrderByAggregateInput_1.PluginsAvgOrderByAggregateInput)
], PluginsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMaxOrderByAggregateInput_1.PluginsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMaxOrderByAggregateInput_1.PluginsMaxOrderByAggregateInput)
], PluginsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsMinOrderByAggregateInput_1.PluginsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsMinOrderByAggregateInput_1.PluginsMinOrderByAggregateInput)
], PluginsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsSumOrderByAggregateInput_1.PluginsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsSumOrderByAggregateInput_1.PluginsSumOrderByAggregateInput)
], PluginsOrderByWithAggregationInput.prototype, "_sum", void 0);
PluginsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PluginsOrderByWithAggregationInput", {
        isAbstract: true
    })
], PluginsOrderByWithAggregationInput);
exports.PluginsOrderByWithAggregationInput = PluginsOrderByWithAggregationInput;
