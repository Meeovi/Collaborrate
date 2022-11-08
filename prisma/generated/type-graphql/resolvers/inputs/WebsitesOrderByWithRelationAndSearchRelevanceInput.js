"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesOrderByWithRelationAndSearchRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesOrderByRelevanceInput_1 = require("../inputs/WebsitesOrderByRelevanceInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WebsitesOrderByWithRelationAndSearchRelevanceInput = class WebsitesOrderByWithRelationAndSearchRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "themes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesOrderByRelevanceInput_1.WebsitesOrderByRelevanceInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesOrderByRelevanceInput_1.WebsitesOrderByRelevanceInput)
], WebsitesOrderByWithRelationAndSearchRelevanceInput.prototype, "_relevance", void 0);
WebsitesOrderByWithRelationAndSearchRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesOrderByWithRelationAndSearchRelevanceInput", {
        isAbstract: true
    })
], WebsitesOrderByWithRelationAndSearchRelevanceInput);
exports.WebsitesOrderByWithRelationAndSearchRelevanceInput = WebsitesOrderByWithRelationAndSearchRelevanceInput;
