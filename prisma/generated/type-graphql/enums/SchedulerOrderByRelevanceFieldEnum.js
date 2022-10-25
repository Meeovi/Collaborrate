"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SchedulerOrderByRelevanceFieldEnum;
(function (SchedulerOrderByRelevanceFieldEnum) {
    SchedulerOrderByRelevanceFieldEnum["end_date"] = "end_date";
    SchedulerOrderByRelevanceFieldEnum["level"] = "level";
    SchedulerOrderByRelevanceFieldEnum["login"] = "login";
    SchedulerOrderByRelevanceFieldEnum["notes"] = "notes";
    SchedulerOrderByRelevanceFieldEnum["start_date"] = "start_date";
    SchedulerOrderByRelevanceFieldEnum["whid"] = "whid";
    SchedulerOrderByRelevanceFieldEnum["label"] = "label";
    SchedulerOrderByRelevanceFieldEnum["public"] = "public";
    SchedulerOrderByRelevanceFieldEnum["permission"] = "permission";
    SchedulerOrderByRelevanceFieldEnum["name"] = "name";
})(SchedulerOrderByRelevanceFieldEnum = exports.SchedulerOrderByRelevanceFieldEnum || (exports.SchedulerOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(SchedulerOrderByRelevanceFieldEnum, {
    name: "SchedulerOrderByRelevanceFieldEnum",
    description: undefined,
});
