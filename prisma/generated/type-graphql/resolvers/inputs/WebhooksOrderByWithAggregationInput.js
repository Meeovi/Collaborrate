"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksAvgOrderByAggregateInput_1 = require("../inputs/WebhooksAvgOrderByAggregateInput");
const WebhooksCountOrderByAggregateInput_1 = require("../inputs/WebhooksCountOrderByAggregateInput");
const WebhooksMaxOrderByAggregateInput_1 = require("../inputs/WebhooksMaxOrderByAggregateInput");
const WebhooksMinOrderByAggregateInput_1 = require("../inputs/WebhooksMinOrderByAggregateInput");
const WebhooksSumOrderByAggregateInput_1 = require("../inputs/WebhooksSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WebhooksOrderByWithAggregationInput = class WebhooksOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "headers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "retrieve", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "publish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithAggregationInput.prototype, "unpublish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksCountOrderByAggregateInput_1.WebhooksCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksCountOrderByAggregateInput_1.WebhooksCountOrderByAggregateInput)
], WebhooksOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksAvgOrderByAggregateInput_1.WebhooksAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksAvgOrderByAggregateInput_1.WebhooksAvgOrderByAggregateInput)
], WebhooksOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMaxOrderByAggregateInput_1.WebhooksMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMaxOrderByAggregateInput_1.WebhooksMaxOrderByAggregateInput)
], WebhooksOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksMinOrderByAggregateInput_1.WebhooksMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksMinOrderByAggregateInput_1.WebhooksMinOrderByAggregateInput)
], WebhooksOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksSumOrderByAggregateInput_1.WebhooksSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksSumOrderByAggregateInput_1.WebhooksSumOrderByAggregateInput)
], WebhooksOrderByWithAggregationInput.prototype, "_sum", void 0);
WebhooksOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksOrderByWithAggregationInput", {
        isAbstract: true
    })
], WebhooksOrderByWithAggregationInput);
exports.WebhooksOrderByWithAggregationInput = WebhooksOrderByWithAggregationInput;
