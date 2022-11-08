"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsitesOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const WebsitesOrderByRelevanceFieldEnum_1 = require("../../enums/WebsitesOrderByRelevanceFieldEnum");
let WebsitesOrderByRelevanceInput = class WebsitesOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebsitesOrderByRelevanceFieldEnum_1.WebsitesOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WebsitesOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebsitesOrderByRelevanceInput.prototype, "search", void 0);
WebsitesOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebsitesOrderByRelevanceInput", {
        isAbstract: true
    })
], WebsitesOrderByRelevanceInput);
exports.WebsitesOrderByRelevanceInput = WebsitesOrderByRelevanceInput;
