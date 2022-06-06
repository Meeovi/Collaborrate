"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EventsAvgOrderByAggregateInput = class EventsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsAvgOrderByAggregateInput.prototype, "id", void 0);
EventsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], EventsAvgOrderByAggregateInput);
exports.EventsAvgOrderByAggregateInput = EventsAvgOrderByAggregateInput;
