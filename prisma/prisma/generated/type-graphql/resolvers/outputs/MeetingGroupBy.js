"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
const MeetingAvgAggregate_1 = require("../outputs/MeetingAvgAggregate");
const MeetingCountAggregate_1 = require("../outputs/MeetingCountAggregate");
const MeetingMaxAggregate_1 = require("../outputs/MeetingMaxAggregate");
const MeetingMinAggregate_1 = require("../outputs/MeetingMinAggregate");
const MeetingSumAggregate_1 = require("../outputs/MeetingSumAggregate");
let MeetingGroupBy = class MeetingGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], MeetingGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], MeetingGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "duration", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "status", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "related_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "reminders", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "assigned_to", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "invitees", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], MeetingGroupBy.prototype, "scheduling", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCountAggregate_1.MeetingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingCountAggregate_1.MeetingCountAggregate)
], MeetingGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingAvgAggregate_1.MeetingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingAvgAggregate_1.MeetingAvgAggregate)
], MeetingGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingSumAggregate_1.MeetingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingSumAggregate_1.MeetingSumAggregate)
], MeetingGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMinAggregate_1.MeetingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMinAggregate_1.MeetingMinAggregate)
], MeetingGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMaxAggregate_1.MeetingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMaxAggregate_1.MeetingMaxAggregate)
], MeetingGroupBy.prototype, "_max", void 0);
MeetingGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MeetingGroupBy", {
        isAbstract: true
    })
], MeetingGroupBy);
exports.MeetingGroupBy = MeetingGroupBy;
