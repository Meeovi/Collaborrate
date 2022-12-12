"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content_typeScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Content_typeScalarFieldEnum;
(function (Content_typeScalarFieldEnum) {
    Content_typeScalarFieldEnum["id"] = "id";
    Content_typeScalarFieldEnum["created_at"] = "created_at";
    Content_typeScalarFieldEnum["text"] = "text";
    Content_typeScalarFieldEnum["number"] = "number";
    Content_typeScalarFieldEnum["json"] = "json";
    Content_typeScalarFieldEnum["link"] = "link";
    Content_typeScalarFieldEnum["email"] = "email";
    Content_typeScalarFieldEnum["uid"] = "uid";
    Content_typeScalarFieldEnum["date"] = "date";
    Content_typeScalarFieldEnum["time"] = "time";
    Content_typeScalarFieldEnum["timestamp"] = "timestamp";
    Content_typeScalarFieldEnum["boolean"] = "boolean";
    Content_typeScalarFieldEnum["rich_text"] = "rich_text";
    Content_typeScalarFieldEnum["password"] = "password";
    Content_typeScalarFieldEnum["media"] = "media";
    Content_typeScalarFieldEnum["database_name"] = "database_name";
})(Content_typeScalarFieldEnum = exports.Content_typeScalarFieldEnum || (exports.Content_typeScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Content_typeScalarFieldEnum, {
    name: "Content_typeScalarFieldEnum",
    description: undefined,
});
