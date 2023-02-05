"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PermissionsOrderByRelevanceFieldEnum;
(function (PermissionsOrderByRelevanceFieldEnum) {
    PermissionsOrderByRelevanceFieldEnum["name"] = "name";
    PermissionsOrderByRelevanceFieldEnum["content"] = "content";
    PermissionsOrderByRelevanceFieldEnum["create"] = "create";
    PermissionsOrderByRelevanceFieldEnum["delete"] = "delete";
    PermissionsOrderByRelevanceFieldEnum["read"] = "read";
    PermissionsOrderByRelevanceFieldEnum["role"] = "role";
    PermissionsOrderByRelevanceFieldEnum["update"] = "update";
    PermissionsOrderByRelevanceFieldEnum["users"] = "users";
})(PermissionsOrderByRelevanceFieldEnum = exports.PermissionsOrderByRelevanceFieldEnum || (exports.PermissionsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PermissionsOrderByRelevanceFieldEnum, {
    name: "PermissionsOrderByRelevanceFieldEnum",
    description: undefined,
});
