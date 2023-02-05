"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var EmailsScalarFieldEnum;
(function (EmailsScalarFieldEnum) {
    EmailsScalarFieldEnum["id"] = "id";
    EmailsScalarFieldEnum["created_at"] = "created_at";
    EmailsScalarFieldEnum["subject"] = "subject";
    EmailsScalarFieldEnum["content"] = "content";
    EmailsScalarFieldEnum["cust_id"] = "cust_id";
    EmailsScalarFieldEnum["bcc"] = "bcc";
    EmailsScalarFieldEnum["cc"] = "cc";
    EmailsScalarFieldEnum["from"] = "from";
    EmailsScalarFieldEnum["media"] = "media";
    EmailsScalarFieldEnum["staff_id"] = "staff_id";
    EmailsScalarFieldEnum["customers"] = "customers";
    EmailsScalarFieldEnum["users"] = "users";
})(EmailsScalarFieldEnum = exports.EmailsScalarFieldEnum || (exports.EmailsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(EmailsScalarFieldEnum, {
    name: "EmailsScalarFieldEnum",
    description: undefined,
});
