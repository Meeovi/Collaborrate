"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TicketingAvgOrderByAggregateInput_1 = require("../inputs/TicketingAvgOrderByAggregateInput");
const TicketingCountOrderByAggregateInput_1 = require("../inputs/TicketingCountOrderByAggregateInput");
const TicketingMaxOrderByAggregateInput_1 = require("../inputs/TicketingMaxOrderByAggregateInput");
const TicketingMinOrderByAggregateInput_1 = require("../inputs/TicketingMinOrderByAggregateInput");
const TicketingSumOrderByAggregateInput_1 = require("../inputs/TicketingSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TicketingOrderByWithAggregationInput = class TicketingOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "severity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "requester", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "requester_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "ticket_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingOrderByWithAggregationInput.prototype, "projects_projectsToticketing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingCountOrderByAggregateInput_1.TicketingCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingCountOrderByAggregateInput_1.TicketingCountOrderByAggregateInput)
], TicketingOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingAvgOrderByAggregateInput_1.TicketingAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingAvgOrderByAggregateInput_1.TicketingAvgOrderByAggregateInput)
], TicketingOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMaxOrderByAggregateInput_1.TicketingMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMaxOrderByAggregateInput_1.TicketingMaxOrderByAggregateInput)
], TicketingOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMinOrderByAggregateInput_1.TicketingMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMinOrderByAggregateInput_1.TicketingMinOrderByAggregateInput)
], TicketingOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingSumOrderByAggregateInput_1.TicketingSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingSumOrderByAggregateInput_1.TicketingSumOrderByAggregateInput)
], TicketingOrderByWithAggregationInput.prototype, "_sum", void 0);
TicketingOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TicketingOrderByWithAggregationInput", {
        isAbstract: true
    })
], TicketingOrderByWithAggregationInput);
exports.TicketingOrderByWithAggregationInput = TicketingOrderByWithAggregationInput;
