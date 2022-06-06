"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pdf_templatesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Pdf_templatesAvgOrderByAggregateInput_1 = require("../inputs/Pdf_templatesAvgOrderByAggregateInput");
const Pdf_templatesCountOrderByAggregateInput_1 = require("../inputs/Pdf_templatesCountOrderByAggregateInput");
const Pdf_templatesMaxOrderByAggregateInput_1 = require("../inputs/Pdf_templatesMaxOrderByAggregateInput");
const Pdf_templatesMinOrderByAggregateInput_1 = require("../inputs/Pdf_templatesMinOrderByAggregateInput");
const Pdf_templatesSumOrderByAggregateInput_1 = require("../inputs/Pdf_templatesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Pdf_templatesOrderByWithAggregationInput = class Pdf_templatesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "active", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "page_size", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "orientation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_left", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_right", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_top", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_bottom", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_header", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Pdf_templatesOrderByWithAggregationInput.prototype, "margin_footer", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesCountOrderByAggregateInput_1.Pdf_templatesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesCountOrderByAggregateInput_1.Pdf_templatesCountOrderByAggregateInput)
], Pdf_templatesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesAvgOrderByAggregateInput_1.Pdf_templatesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesAvgOrderByAggregateInput_1.Pdf_templatesAvgOrderByAggregateInput)
], Pdf_templatesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMaxOrderByAggregateInput_1.Pdf_templatesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMaxOrderByAggregateInput_1.Pdf_templatesMaxOrderByAggregateInput)
], Pdf_templatesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesMinOrderByAggregateInput_1.Pdf_templatesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesMinOrderByAggregateInput_1.Pdf_templatesMinOrderByAggregateInput)
], Pdf_templatesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Pdf_templatesSumOrderByAggregateInput_1.Pdf_templatesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Pdf_templatesSumOrderByAggregateInput_1.Pdf_templatesSumOrderByAggregateInput)
], Pdf_templatesOrderByWithAggregationInput.prototype, "_sum", void 0);
Pdf_templatesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Pdf_templatesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Pdf_templatesOrderByWithAggregationInput);
exports.Pdf_templatesOrderByWithAggregationInput = Pdf_templatesOrderByWithAggregationInput;
