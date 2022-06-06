"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MeetingScalarFieldEnum;
(function (MeetingScalarFieldEnum) {
    MeetingScalarFieldEnum["id"] = "id";
    MeetingScalarFieldEnum["created_at"] = "created_at";
    MeetingScalarFieldEnum["subject"] = "subject";
    MeetingScalarFieldEnum["start_date"] = "start_date";
    MeetingScalarFieldEnum["end_date"] = "end_date";
    MeetingScalarFieldEnum["duration"] = "duration";
    MeetingScalarFieldEnum["status"] = "status";
    MeetingScalarFieldEnum["related_to"] = "related_to";
    MeetingScalarFieldEnum["reminders"] = "reminders";
    MeetingScalarFieldEnum["content"] = "content";
    MeetingScalarFieldEnum["assigned_to"] = "assigned_to";
    MeetingScalarFieldEnum["invitees"] = "invitees";
    MeetingScalarFieldEnum["scheduling"] = "scheduling";
})(MeetingScalarFieldEnum = exports.MeetingScalarFieldEnum || (exports.MeetingScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MeetingScalarFieldEnum, {
    name: "MeetingScalarFieldEnum",
    description: undefined,
});
