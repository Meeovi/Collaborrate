"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ThemesOrderByRelationAggregateInput_1 = require("../inputs/ThemesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WebsitesOrderByWithRelationInput = class WebsitesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithRelationInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ThemesOrderByRelationAggregateInput_1.ThemesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ThemesOrderByRelationAggregateInput_1.ThemesOrderByRelationAggregateInput)
], WebsitesOrderByWithRelationInput.prototype, "themes", void 0);
WebsitesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesOrderByWithRelationInput", {
        isAbstract: true
    })
], WebsitesOrderByWithRelationInput);
exports.WebsitesOrderByWithRelationInput = WebsitesOrderByWithRelationInput;
