"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateEvents = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsAvgAggregate_1 = require("../outputs/EventsAvgAggregate");
const EventsCountAggregate_1 = require("../outputs/EventsCountAggregate");
const EventsMaxAggregate_1 = require("../outputs/EventsMaxAggregate");
const EventsMinAggregate_1 = require("../outputs/EventsMinAggregate");
const EventsSumAggregate_1 = require("../outputs/EventsSumAggregate");
let AggregateEvents = class AggregateEvents {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCountAggregate_1.EventsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsCountAggregate_1.EventsCountAggregate)
], AggregateEvents.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsAvgAggregate_1.EventsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsAvgAggregate_1.EventsAvgAggregate)
], AggregateEvents.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsSumAggregate_1.EventsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsSumAggregate_1.EventsSumAggregate)
], AggregateEvents.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMinAggregate_1.EventsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMinAggregate_1.EventsMinAggregate)
], AggregateEvents.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMaxAggregate_1.EventsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMaxAggregate_1.EventsMaxAggregate)
], AggregateEvents.prototype, "_max", void 0);
AggregateEvents = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateEvents", {
        isAbstract: true
    })
], AggregateEvents);
exports.AggregateEvents = AggregateEvents;
