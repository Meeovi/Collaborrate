"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var LogInOrderByRelevanceFieldEnum;
(function (LogInOrderByRelevanceFieldEnum) {
    LogInOrderByRelevanceFieldEnum["email"] = "email";
    LogInOrderByRelevanceFieldEnum["password"] = "password";
    LogInOrderByRelevanceFieldEnum["token"] = "token";
    LogInOrderByRelevanceFieldEnum["expiresIn"] = "expiresIn";
    LogInOrderByRelevanceFieldEnum["users"] = "users";
    LogInOrderByRelevanceFieldEnum["username"] = "username";
})(LogInOrderByRelevanceFieldEnum = exports.LogInOrderByRelevanceFieldEnum || (exports.LogInOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(LogInOrderByRelevanceFieldEnum, {
    name: "LogInOrderByRelevanceFieldEnum",
    description: undefined,
});
