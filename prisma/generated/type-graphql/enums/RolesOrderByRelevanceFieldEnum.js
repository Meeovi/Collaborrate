"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RolesOrderByRelevanceFieldEnum;
(function (RolesOrderByRelevanceFieldEnum) {
    RolesOrderByRelevanceFieldEnum["role_name"] = "role_name";
    RolesOrderByRelevanceFieldEnum["content"] = "content";
    RolesOrderByRelevanceFieldEnum["type"] = "type";
    RolesOrderByRelevanceFieldEnum["createRole"] = "createRole";
    RolesOrderByRelevanceFieldEnum["updateRole"] = "updateRole";
    RolesOrderByRelevanceFieldEnum["deleteRole"] = "deleteRole";
    RolesOrderByRelevanceFieldEnum["publishRole"] = "publishRole";
    RolesOrderByRelevanceFieldEnum["unpublishRole"] = "unpublishRole";
    RolesOrderByRelevanceFieldEnum["role"] = "role";
})(RolesOrderByRelevanceFieldEnum = exports.RolesOrderByRelevanceFieldEnum || (exports.RolesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(RolesOrderByRelevanceFieldEnum, {
    name: "RolesOrderByRelevanceFieldEnum",
    description: undefined,
});
