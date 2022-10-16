"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TicketingSumOrderByAggregateInput = class TicketingSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingSumOrderByAggregateInput.prototype, "id", void 0);
TicketingSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TicketingSumOrderByAggregateInput", {
        isAbstract: true
    })
], TicketingSumOrderByAggregateInput);
exports.TicketingSumOrderByAggregateInput = TicketingSumOrderByAggregateInput;
