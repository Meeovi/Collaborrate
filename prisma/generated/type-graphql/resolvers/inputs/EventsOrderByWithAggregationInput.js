"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EventsAvgOrderByAggregateInput_1 = require("../inputs/EventsAvgOrderByAggregateInput");
const EventsCountOrderByAggregateInput_1 = require("../inputs/EventsCountOrderByAggregateInput");
const EventsMaxOrderByAggregateInput_1 = require("../inputs/EventsMaxOrderByAggregateInput");
const EventsMinOrderByAggregateInput_1 = require("../inputs/EventsMinOrderByAggregateInput");
const EventsSumOrderByAggregateInput_1 = require("../inputs/EventsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let EventsOrderByWithAggregationInput = class EventsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "tickets", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "start", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "end", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "category", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "city", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "state", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "country", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "postalcode", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationBillingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationGrandTotalPurchased", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationInvoiceDate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationOrderNumber", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationPaymentMethod", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationShippingAddress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationCustomerName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "invitationStatus", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EventsOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsCountOrderByAggregateInput_1.EventsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsCountOrderByAggregateInput_1.EventsCountOrderByAggregateInput)
], EventsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsAvgOrderByAggregateInput_1.EventsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsAvgOrderByAggregateInput_1.EventsAvgOrderByAggregateInput)
], EventsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMaxOrderByAggregateInput_1.EventsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMaxOrderByAggregateInput_1.EventsMaxOrderByAggregateInput)
], EventsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsMinOrderByAggregateInput_1.EventsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsMinOrderByAggregateInput_1.EventsMinOrderByAggregateInput)
], EventsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EventsSumOrderByAggregateInput_1.EventsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EventsSumOrderByAggregateInput_1.EventsSumOrderByAggregateInput)
], EventsOrderByWithAggregationInput.prototype, "_sum", void 0);
EventsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EventsOrderByWithAggregationInput", {
        isAbstract: true
    })
], EventsOrderByWithAggregationInput);
exports.EventsOrderByWithAggregationInput = EventsOrderByWithAggregationInput;
