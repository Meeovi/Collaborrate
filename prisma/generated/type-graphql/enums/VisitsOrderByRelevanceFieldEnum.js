"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var VisitsOrderByRelevanceFieldEnum;
(function (VisitsOrderByRelevanceFieldEnum) {
    VisitsOrderByRelevanceFieldEnum["location"] = "location";
    VisitsOrderByRelevanceFieldEnum["username"] = "username";
    VisitsOrderByRelevanceFieldEnum["reason"] = "reason";
    VisitsOrderByRelevanceFieldEnum["content"] = "content";
    VisitsOrderByRelevanceFieldEnum["emergency"] = "emergency";
    VisitsOrderByRelevanceFieldEnum["start_date"] = "start_date";
    VisitsOrderByRelevanceFieldEnum["end_date"] = "end_date";
    VisitsOrderByRelevanceFieldEnum["task"] = "task";
    VisitsOrderByRelevanceFieldEnum["meeting"] = "meeting";
})(VisitsOrderByRelevanceFieldEnum = exports.VisitsOrderByRelevanceFieldEnum || (exports.VisitsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(VisitsOrderByRelevanceFieldEnum, {
    name: "VisitsOrderByRelevanceFieldEnum",
    description: undefined,
});
