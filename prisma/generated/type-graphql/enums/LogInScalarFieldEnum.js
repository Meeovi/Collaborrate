"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LogInScalarFieldEnum;
(function (LogInScalarFieldEnum) {
    LogInScalarFieldEnum["id"] = "id";
    LogInScalarFieldEnum["created_at"] = "created_at";
    LogInScalarFieldEnum["email"] = "email";
    LogInScalarFieldEnum["password"] = "password";
    LogInScalarFieldEnum["token"] = "token";
    LogInScalarFieldEnum["expiresIn"] = "expiresIn";
    LogInScalarFieldEnum["users"] = "users";
    LogInScalarFieldEnum["username"] = "username";
})(LogInScalarFieldEnum = exports.LogInScalarFieldEnum || (exports.LogInScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(LogInScalarFieldEnum, {
    name: "LogInScalarFieldEnum",
    description: undefined,
});
