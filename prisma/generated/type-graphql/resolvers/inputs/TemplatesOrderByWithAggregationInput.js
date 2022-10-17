"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TemplatesAvgOrderByAggregateInput_1 = require("../inputs/TemplatesAvgOrderByAggregateInput");
const TemplatesCountOrderByAggregateInput_1 = require("../inputs/TemplatesCountOrderByAggregateInput");
const TemplatesMaxOrderByAggregateInput_1 = require("../inputs/TemplatesMaxOrderByAggregateInput");
const TemplatesMinOrderByAggregateInput_1 = require("../inputs/TemplatesMinOrderByAggregateInput");
const TemplatesSumOrderByAggregateInput_1 = require("../inputs/TemplatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TemplatesOrderByWithAggregationInput = class TemplatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "page_size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "orientation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_left", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_right", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_top", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_bottom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TemplatesOrderByWithAggregationInput.prototype, "margin_footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesCountOrderByAggregateInput_1.TemplatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesCountOrderByAggregateInput_1.TemplatesCountOrderByAggregateInput)
], TemplatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesAvgOrderByAggregateInput_1.TemplatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesAvgOrderByAggregateInput_1.TemplatesAvgOrderByAggregateInput)
], TemplatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMaxOrderByAggregateInput_1.TemplatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMaxOrderByAggregateInput_1.TemplatesMaxOrderByAggregateInput)
], TemplatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesMinOrderByAggregateInput_1.TemplatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesMinOrderByAggregateInput_1.TemplatesMinOrderByAggregateInput)
], TemplatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TemplatesSumOrderByAggregateInput_1.TemplatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TemplatesSumOrderByAggregateInput_1.TemplatesSumOrderByAggregateInput)
], TemplatesOrderByWithAggregationInput.prototype, "_sum", void 0);
TemplatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TemplatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], TemplatesOrderByWithAggregationInput);
exports.TemplatesOrderByWithAggregationInput = TemplatesOrderByWithAggregationInput;
