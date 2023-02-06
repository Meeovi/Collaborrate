"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PermissionsScalarFieldEnum;
(function (PermissionsScalarFieldEnum) {
    PermissionsScalarFieldEnum["id"] = "id";
    PermissionsScalarFieldEnum["created_at"] = "created_at";
    PermissionsScalarFieldEnum["name"] = "name";
    PermissionsScalarFieldEnum["content"] = "content";
    PermissionsScalarFieldEnum["create"] = "create";
    PermissionsScalarFieldEnum["delete"] = "delete";
    PermissionsScalarFieldEnum["read"] = "read";
    PermissionsScalarFieldEnum["role"] = "role";
    PermissionsScalarFieldEnum["update"] = "update";
    PermissionsScalarFieldEnum["users"] = "users";
})(PermissionsScalarFieldEnum = exports.PermissionsScalarFieldEnum || (exports.PermissionsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PermissionsScalarFieldEnum, {
    name: "PermissionsScalarFieldEnum",
    description: undefined,
});
