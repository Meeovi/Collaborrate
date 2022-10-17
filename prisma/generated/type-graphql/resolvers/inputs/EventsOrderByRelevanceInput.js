"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsOrderByRelevanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsOrderByRelevanceFieldEnum_1 = require("../../enums/EventsOrderByRelevanceFieldEnum");
const SortOrder_1 = require("../../enums/SortOrder");
let EventsOrderByRelevanceInput = class EventsOrderByRelevanceInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [EventsOrderByRelevanceFieldEnum_1.EventsOrderByRelevanceFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], EventsOrderByRelevanceInput.prototype, "fields", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByRelevanceInput.prototype, "sort", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByRelevanceInput.prototype, "search", void 0);
EventsOrderByRelevanceInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventsOrderByRelevanceInput", {
        isAbstract: true
    })
], EventsOrderByRelevanceInput);
exports.EventsOrderByRelevanceInput = EventsOrderByRelevanceInput;
