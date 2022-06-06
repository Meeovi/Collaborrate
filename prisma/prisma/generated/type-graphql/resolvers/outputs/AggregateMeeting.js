"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateMeeting = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MeetingAvgAggregate_1 = require("../outputs/MeetingAvgAggregate");
const MeetingCountAggregate_1 = require("../outputs/MeetingCountAggregate");
const MeetingMaxAggregate_1 = require("../outputs/MeetingMaxAggregate");
const MeetingMinAggregate_1 = require("../outputs/MeetingMinAggregate");
const MeetingSumAggregate_1 = require("../outputs/MeetingSumAggregate");
let AggregateMeeting = class AggregateMeeting {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingCountAggregate_1.MeetingCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingCountAggregate_1.MeetingCountAggregate)
], AggregateMeeting.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingAvgAggregate_1.MeetingAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingAvgAggregate_1.MeetingAvgAggregate)
], AggregateMeeting.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingSumAggregate_1.MeetingSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingSumAggregate_1.MeetingSumAggregate)
], AggregateMeeting.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMinAggregate_1.MeetingMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMinAggregate_1.MeetingMinAggregate)
], AggregateMeeting.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MeetingMaxAggregate_1.MeetingMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MeetingMaxAggregate_1.MeetingMaxAggregate)
], AggregateMeeting.prototype, "_max", void 0);
AggregateMeeting = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateMeeting", {
        isAbstract: true
    })
], AggregateMeeting);
exports.AggregateMeeting = AggregateMeeting;
