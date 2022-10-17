"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MessagesOrderByRelevanceFieldEnum;
(function (MessagesOrderByRelevanceFieldEnum) {
    MessagesOrderByRelevanceFieldEnum["from"] = "from";
    MessagesOrderByRelevanceFieldEnum["subject"] = "subject";
    MessagesOrderByRelevanceFieldEnum["content"] = "content";
    MessagesOrderByRelevanceFieldEnum["sender"] = "sender";
    MessagesOrderByRelevanceFieldEnum["media"] = "media";
    MessagesOrderByRelevanceFieldEnum["customers"] = "customers";
    MessagesOrderByRelevanceFieldEnum["users"] = "users";
})(MessagesOrderByRelevanceFieldEnum = exports.MessagesOrderByRelevanceFieldEnum || (exports.MessagesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(MessagesOrderByRelevanceFieldEnum, {
    name: "MessagesOrderByRelevanceFieldEnum",
    description: undefined,
});
