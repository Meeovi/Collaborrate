"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OotoOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var OotoOrderByRelevanceFieldEnum;
(function (OotoOrderByRelevanceFieldEnum) {
    OotoOrderByRelevanceFieldEnum["login"] = "login";
    OotoOrderByRelevanceFieldEnum["start_date"] = "start_date";
    OotoOrderByRelevanceFieldEnum["end_date"] = "end_date";
    OotoOrderByRelevanceFieldEnum["note"] = "note";
    OotoOrderByRelevanceFieldEnum["using_time"] = "using_time";
    OotoOrderByRelevanceFieldEnum["location"] = "location";
})(OotoOrderByRelevanceFieldEnum = exports.OotoOrderByRelevanceFieldEnum || (exports.OotoOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(OotoOrderByRelevanceFieldEnum, {
    name: "OotoOrderByRelevanceFieldEnum",
    description: undefined,
});
