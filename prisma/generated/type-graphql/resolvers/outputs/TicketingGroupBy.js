"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const TicketingAvgAggregate_1 = require("../outputs/TicketingAvgAggregate");
const TicketingCountAggregate_1 = require("../outputs/TicketingCountAggregate");
const TicketingMaxAggregate_1 = require("../outputs/TicketingMaxAggregate");
const TicketingMinAggregate_1 = require("../outputs/TicketingMinAggregate");
const TicketingSumAggregate_1 = require("../outputs/TicketingSumAggregate");
let TicketingGroupBy = class TicketingGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], TicketingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TicketingGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "location", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "severity", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "team", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "requester", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "requester_email", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "department", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "media", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "projects", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "ticket_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "comment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "products", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "resolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], TicketingGroupBy.prototype, "date_modified", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "account_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "level", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TicketingGroupBy.prototype, "projects_projectsToticketing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingCountAggregate_1.TicketingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingCountAggregate_1.TicketingCountAggregate)
], TicketingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingAvgAggregate_1.TicketingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingAvgAggregate_1.TicketingAvgAggregate)
], TicketingGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingSumAggregate_1.TicketingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingSumAggregate_1.TicketingSumAggregate)
], TicketingGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMinAggregate_1.TicketingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMinAggregate_1.TicketingMinAggregate)
], TicketingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TicketingMaxAggregate_1.TicketingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TicketingMaxAggregate_1.TicketingMaxAggregate)
], TicketingGroupBy.prototype, "_max", void 0);
TicketingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TicketingGroupBy", {
        isAbstract: true
    })
], TicketingGroupBy);
exports.TicketingGroupBy = TicketingGroupBy;
