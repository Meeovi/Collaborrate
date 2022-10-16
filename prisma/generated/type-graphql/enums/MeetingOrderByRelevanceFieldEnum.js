"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MeetingOrderByRelevanceFieldEnum;
(function (MeetingOrderByRelevanceFieldEnum) {
    MeetingOrderByRelevanceFieldEnum["subject"] = "subject";
    MeetingOrderByRelevanceFieldEnum["start_date"] = "start_date";
    MeetingOrderByRelevanceFieldEnum["end_date"] = "end_date";
    MeetingOrderByRelevanceFieldEnum["duration"] = "duration";
    MeetingOrderByRelevanceFieldEnum["status"] = "status";
    MeetingOrderByRelevanceFieldEnum["related_to"] = "related_to";
    MeetingOrderByRelevanceFieldEnum["reminders"] = "reminders";
    MeetingOrderByRelevanceFieldEnum["content"] = "content";
    MeetingOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    MeetingOrderByRelevanceFieldEnum["invitees"] = "invitees";
    MeetingOrderByRelevanceFieldEnum["scheduling"] = "scheduling";
})(MeetingOrderByRelevanceFieldEnum = exports.MeetingOrderByRelevanceFieldEnum || (exports.MeetingOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(MeetingOrderByRelevanceFieldEnum, {
    name: "MeetingOrderByRelevanceFieldEnum",
    description: undefined,
});
