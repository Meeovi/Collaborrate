"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EmailsScalarFieldEnum;
(function (EmailsScalarFieldEnum) {
    EmailsScalarFieldEnum["id"] = "id";
    EmailsScalarFieldEnum["title"] = "title";
    EmailsScalarFieldEnum["created_at"] = "created_at";
    EmailsScalarFieldEnum["subject"] = "subject";
    EmailsScalarFieldEnum["content"] = "content";
    EmailsScalarFieldEnum["recipients"] = "recipients";
    EmailsScalarFieldEnum["cust_id"] = "cust_id";
})(EmailsScalarFieldEnum = exports.EmailsScalarFieldEnum || (exports.EmailsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EmailsScalarFieldEnum, {
    name: "EmailsScalarFieldEnum",
    description: undefined,
});
