"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TicketingAvgOrderByAggregateInput = class TicketingAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingAvgOrderByAggregateInput.prototype, "id", void 0);
TicketingAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TicketingAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TicketingAvgOrderByAggregateInput);
exports.TicketingAvgOrderByAggregateInput = TicketingAvgOrderByAggregateInput;
