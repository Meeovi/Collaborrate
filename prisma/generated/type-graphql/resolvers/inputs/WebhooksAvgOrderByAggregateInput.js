"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let WebhooksAvgOrderByAggregateInput = class WebhooksAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], WebhooksAvgOrderByAggregateInput.prototype, "id", void 0);
WebhooksAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("WebhooksAvgOrderByAggregateInput", {
        isAbstract: true
    })
], WebhooksAvgOrderByAggregateInput);
exports.WebhooksAvgOrderByAggregateInput = WebhooksAvgOrderByAggregateInput;
