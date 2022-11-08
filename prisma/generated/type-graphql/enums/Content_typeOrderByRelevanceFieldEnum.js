"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Content_typeOrderByRelevanceFieldEnum;
(function (Content_typeOrderByRelevanceFieldEnum) {
    Content_typeOrderByRelevanceFieldEnum["text"] = "text";
    Content_typeOrderByRelevanceFieldEnum["link"] = "link";
    Content_typeOrderByRelevanceFieldEnum["email"] = "email";
    Content_typeOrderByRelevanceFieldEnum["uid"] = "uid";
    Content_typeOrderByRelevanceFieldEnum["rich_text"] = "rich_text";
    Content_typeOrderByRelevanceFieldEnum["password"] = "password";
    Content_typeOrderByRelevanceFieldEnum["media"] = "media";
    Content_typeOrderByRelevanceFieldEnum["database_name"] = "database_name";
})(Content_typeOrderByRelevanceFieldEnum = exports.Content_typeOrderByRelevanceFieldEnum || (exports.Content_typeOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(Content_typeOrderByRelevanceFieldEnum, {
    name: "Content_typeOrderByRelevanceFieldEnum",
    description: undefined,
});
