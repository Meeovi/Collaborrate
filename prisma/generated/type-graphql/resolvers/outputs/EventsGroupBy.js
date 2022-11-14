"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const EventsAvgAggregate_1 = require("../outputs/EventsAvgAggregate");
const EventsCountAggregate_1 = require("../outputs/EventsCountAggregate");
const EventsMaxAggregate_1 = require("../outputs/EventsMaxAggregate");
const EventsMinAggregate_1 = require("../outputs/EventsMinAggregate");
const EventsSumAggregate_1 = require("../outputs/EventsSumAggregate");
let EventsGroupBy = class EventsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], EventsGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], EventsGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "start", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "end", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationBillingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationGrandTotalPurchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationInvoiceDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationOrderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationPaymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationCustomerName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "invitationStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCountAggregate_1.EventsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsCountAggregate_1.EventsCountAggregate)
], EventsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsAvgAggregate_1.EventsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsAvgAggregate_1.EventsAvgAggregate)
], EventsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsSumAggregate_1.EventsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsSumAggregate_1.EventsSumAggregate)
], EventsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMinAggregate_1.EventsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMinAggregate_1.EventsMinAggregate)
], EventsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMaxAggregate_1.EventsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMaxAggregate_1.EventsMaxAggregate)
], EventsGroupBy.prototype, "_max", void 0);
EventsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("EventsGroupBy", {
        isAbstract: true
    })
], EventsGroupBy);
exports.EventsGroupBy = EventsGroupBy;
