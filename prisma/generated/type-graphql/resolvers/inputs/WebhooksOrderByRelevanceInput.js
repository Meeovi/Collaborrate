"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
const WebhooksOrderByRelevanceFieldEnum_1 = require("../../enums/WebhooksOrderByRelevanceFieldEnum");
let WebhooksOrderByRelevanceInput = class WebhooksOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [WebhooksOrderByRelevanceFieldEnum_1.WebhooksOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], WebhooksOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksOrderByRelevanceInput.prototype, "search", void 0);
WebhooksOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksOrderByRelevanceInput", {
        isAbstract: true
    })
], WebhooksOrderByRelevanceInput);
exports.WebhooksOrderByRelevanceInput = WebhooksOrderByRelevanceInput;
