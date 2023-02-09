"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EmailsOrderByRelevanceFieldEnum;
(function (EmailsOrderByRelevanceFieldEnum) {
    EmailsOrderByRelevanceFieldEnum["subject"] = "subject";
    EmailsOrderByRelevanceFieldEnum["content"] = "content";
    EmailsOrderByRelevanceFieldEnum["bcc"] = "bcc";
    EmailsOrderByRelevanceFieldEnum["cc"] = "cc";
    EmailsOrderByRelevanceFieldEnum["from"] = "from";
    EmailsOrderByRelevanceFieldEnum["media"] = "media";
    EmailsOrderByRelevanceFieldEnum["customers"] = "customers";
    EmailsOrderByRelevanceFieldEnum["users"] = "users";
})(EmailsOrderByRelevanceFieldEnum = exports.EmailsOrderByRelevanceFieldEnum || (exports.EmailsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(EmailsOrderByRelevanceFieldEnum, {
    name: "EmailsOrderByRelevanceFieldEnum",
    description: undefined,
});
