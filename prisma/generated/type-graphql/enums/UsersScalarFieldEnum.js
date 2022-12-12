"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UsersScalarFieldEnum;
(function (UsersScalarFieldEnum) {
    UsersScalarFieldEnum["id"] = "id";
    UsersScalarFieldEnum["username"] = "username";
    UsersScalarFieldEnum["first_name"] = "first_name";
    UsersScalarFieldEnum["last_name"] = "last_name";
    UsersScalarFieldEnum["email"] = "email";
    UsersScalarFieldEnum["password"] = "password";
    UsersScalarFieldEnum["interface_locale"] = "interface_locale";
    UsersScalarFieldEnum["value"] = "value";
    UsersScalarFieldEnum["permissions"] = "permissions";
    UsersScalarFieldEnum["created_at"] = "created_at";
    UsersScalarFieldEnum["emails"] = "emails";
    UsersScalarFieldEnum["mediamanager"] = "mediamanager";
    UsersScalarFieldEnum["messages"] = "messages";
    UsersScalarFieldEnum["projects"] = "projects";
    UsersScalarFieldEnum["workspaces"] = "workspaces";
})(UsersScalarFieldEnum = exports.UsersScalarFieldEnum || (exports.UsersScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
    name: "UsersScalarFieldEnum",
    description: undefined,
});
