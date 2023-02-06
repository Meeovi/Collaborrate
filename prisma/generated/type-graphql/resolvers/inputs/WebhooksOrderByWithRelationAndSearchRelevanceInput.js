"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebhooksOrderByRelevanceInput_1 = require("../inputs/WebhooksOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WebhooksOrderByWithRelationAndSearchRelevanceInput = class WebhooksOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "headers", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "retrieve", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "publish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "unpublish", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebhooksOrderByRelevanceInput_1.WebhooksOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebhooksOrderByRelevanceInput_1.WebhooksOrderByRelevanceInput)
], WebhooksOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
WebhooksOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], WebhooksOrderByWithRelationAndSearchRelevanceInput);
exports.WebhooksOrderByWithRelationAndSearchRelevanceInput = WebhooksOrderByWithRelationAndSearchRelevanceInput;
