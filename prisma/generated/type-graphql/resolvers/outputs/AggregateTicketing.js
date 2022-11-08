"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTicketing = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingAvgAggregate_1 = require("../outputs/TicketingAvgAggregate");
const TicketingCountAggregate_1 = require("../outputs/TicketingCountAggregate");
const TicketingMaxAggregate_1 = require("../outputs/TicketingMaxAggregate");
const TicketingMinAggregate_1 = require("../outputs/TicketingMinAggregate");
const TicketingSumAggregate_1 = require("../outputs/TicketingSumAggregate");
let AggregateTicketing = class AggregateTicketing {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingCountAggregate_1.TicketingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingCountAggregate_1.TicketingCountAggregate)
], AggregateTicketing.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingAvgAggregate_1.TicketingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingAvgAggregate_1.TicketingAvgAggregate)
], AggregateTicketing.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingSumAggregate_1.TicketingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingSumAggregate_1.TicketingSumAggregate)
], AggregateTicketing.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMinAggregate_1.TicketingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMinAggregate_1.TicketingMinAggregate)
], AggregateTicketing.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMaxAggregate_1.TicketingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMaxAggregate_1.TicketingMaxAggregate)
], AggregateTicketing.prototype, "_max", void 0);
AggregateTicketing = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTicketing", {
        isAbstract: true
    })
], AggregateTicketing);
exports.AggregateTicketing = AggregateTicketing;
