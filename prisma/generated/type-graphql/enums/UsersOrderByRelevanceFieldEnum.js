"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UsersOrderByRelevanceFieldEnum;
(function (UsersOrderByRelevanceFieldEnum) {
    UsersOrderByRelevanceFieldEnum["username"] = "username";
    UsersOrderByRelevanceFieldEnum["first_name"] = "first_name";
    UsersOrderByRelevanceFieldEnum["last_name"] = "last_name";
    UsersOrderByRelevanceFieldEnum["email"] = "email";
    UsersOrderByRelevanceFieldEnum["password"] = "password";
    UsersOrderByRelevanceFieldEnum["interface_locale"] = "interface_locale";
    UsersOrderByRelevanceFieldEnum["value"] = "value";
    UsersOrderByRelevanceFieldEnum["permissions"] = "permissions";
    UsersOrderByRelevanceFieldEnum["emails"] = "emails";
    UsersOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
    UsersOrderByRelevanceFieldEnum["messages"] = "messages";
    UsersOrderByRelevanceFieldEnum["projects"] = "projects";
    UsersOrderByRelevanceFieldEnum["workspaces"] = "workspaces";
})(UsersOrderByRelevanceFieldEnum = exports.UsersOrderByRelevanceFieldEnum || (exports.UsersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(UsersOrderByRelevanceFieldEnum, {
    name: "UsersOrderByRelevanceFieldEnum",
    description: undefined,
});
