"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RolesScalarFieldEnum;
(function (RolesScalarFieldEnum) {
    RolesScalarFieldEnum["id"] = "id";
    RolesScalarFieldEnum["role_name"] = "role_name";
    RolesScalarFieldEnum["content"] = "content";
    RolesScalarFieldEnum["created_at"] = "created_at";
})(RolesScalarFieldEnum = exports.RolesScalarFieldEnum || (exports.RolesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RolesScalarFieldEnum, {
    name: "RolesScalarFieldEnum",
    description: undefined,
});
