"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let EventsSumOrderByAggregateInput = class EventsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsSumOrderByAggregateInput.prototype, "id", void 0);
EventsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventsSumOrderByAggregateInput", {
        isAbstract: true
    })
], EventsSumOrderByAggregateInput);
exports.EventsSumOrderByAggregateInput = EventsSumOrderByAggregateInput;
