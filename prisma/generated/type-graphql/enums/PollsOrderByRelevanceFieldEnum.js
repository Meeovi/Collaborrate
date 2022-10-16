"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PollsOrderByRelevanceFieldEnum;
(function (PollsOrderByRelevanceFieldEnum) {
    PollsOrderByRelevanceFieldEnum["name"] = "name";
    PollsOrderByRelevanceFieldEnum["excerpt"] = "excerpt";
    PollsOrderByRelevanceFieldEnum["description"] = "description";
    PollsOrderByRelevanceFieldEnum["image"] = "image";
    PollsOrderByRelevanceFieldEnum["question"] = "question";
    PollsOrderByRelevanceFieldEnum["response"] = "response";
    PollsOrderByRelevanceFieldEnum["categories"] = "categories";
    PollsOrderByRelevanceFieldEnum["articles"] = "articles";
    PollsOrderByRelevanceFieldEnum["products"] = "products";
    PollsOrderByRelevanceFieldEnum["customers"] = "customers";
    PollsOrderByRelevanceFieldEnum["users"] = "users";
})(PollsOrderByRelevanceFieldEnum = exports.PollsOrderByRelevanceFieldEnum || (exports.PollsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PollsOrderByRelevanceFieldEnum, {
    name: "PollsOrderByRelevanceFieldEnum",
    description: undefined,
});
