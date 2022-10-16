"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepdiveOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var DeepdiveOrderByRelevanceFieldEnum;
(function (DeepdiveOrderByRelevanceFieldEnum) {
    DeepdiveOrderByRelevanceFieldEnum["end_date"] = "end_date";
    DeepdiveOrderByRelevanceFieldEnum["content"] = "content";
    DeepdiveOrderByRelevanceFieldEnum["attendees"] = "attendees";
    DeepdiveOrderByRelevanceFieldEnum["login"] = "login";
    DeepdiveOrderByRelevanceFieldEnum["start_date"] = "start_date";
    DeepdiveOrderByRelevanceFieldEnum["whid"] = "whid";
})(DeepdiveOrderByRelevanceFieldEnum = exports.DeepdiveOrderByRelevanceFieldEnum || (exports.DeepdiveOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(DeepdiveOrderByRelevanceFieldEnum, {
    name: "DeepdiveOrderByRelevanceFieldEnum",
    description: undefined,
});
