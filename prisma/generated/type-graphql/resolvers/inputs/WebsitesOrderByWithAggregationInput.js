"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WebsitesAvgOrderByAggregateInput_1 = require("../inputs/WebsitesAvgOrderByAggregateInput");
const WebsitesCountOrderByAggregateInput_1 = require("../inputs/WebsitesCountOrderByAggregateInput");
const WebsitesMaxOrderByAggregateInput_1 = require("../inputs/WebsitesMaxOrderByAggregateInput");
const WebsitesMinOrderByAggregateInput_1 = require("../inputs/WebsitesMinOrderByAggregateInput");
const WebsitesSumOrderByAggregateInput_1 = require("../inputs/WebsitesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let WebsitesOrderByWithAggregationInput = class WebsitesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "url", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "shop", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "store", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "themes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesCountOrderByAggregateInput_1.WebsitesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesCountOrderByAggregateInput_1.WebsitesCountOrderByAggregateInput)
], WebsitesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesAvgOrderByAggregateInput_1.WebsitesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesAvgOrderByAggregateInput_1.WebsitesAvgOrderByAggregateInput)
], WebsitesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMaxOrderByAggregateInput_1.WebsitesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMaxOrderByAggregateInput_1.WebsitesMaxOrderByAggregateInput)
], WebsitesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesMinOrderByAggregateInput_1.WebsitesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesMinOrderByAggregateInput_1.WebsitesMinOrderByAggregateInput)
], WebsitesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WebsitesSumOrderByAggregateInput_1.WebsitesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", WebsitesSumOrderByAggregateInput_1.WebsitesSumOrderByAggregateInput)
], WebsitesOrderByWithAggregationInput.prototype, "_sum", void 0);
WebsitesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesOrderByWithAggregationInput", {
        isAbstract: true
    })
], WebsitesOrderByWithAggregationInput);
exports.WebsitesOrderByWithAggregationInput = WebsitesOrderByWithAggregationInput;
