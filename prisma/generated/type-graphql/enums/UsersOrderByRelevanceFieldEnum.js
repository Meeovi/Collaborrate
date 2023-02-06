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
    UsersOrderByRelevanceFieldEnum["phone"] = "phone";
    UsersOrderByRelevanceFieldEnum["permissions"] = "permissions";
    UsersOrderByRelevanceFieldEnum["mediamanager"] = "mediamanager";
})(UsersOrderByRelevanceFieldEnum = exports.UsersOrderByRelevanceFieldEnum || (exports.UsersOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(UsersOrderByRelevanceFieldEnum, {
    name: "UsersOrderByRelevanceFieldEnum",
    description: undefined,
});
