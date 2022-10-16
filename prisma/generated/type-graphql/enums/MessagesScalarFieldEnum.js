"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var MessagesScalarFieldEnum;
(function (MessagesScalarFieldEnum) {
    MessagesScalarFieldEnum["id"] = "id";
    MessagesScalarFieldEnum["from"] = "from";
    MessagesScalarFieldEnum["created_at"] = "created_at";
    MessagesScalarFieldEnum["subject"] = "subject";
    MessagesScalarFieldEnum["content"] = "content";
    MessagesScalarFieldEnum["sender"] = "sender";
    MessagesScalarFieldEnum["cust_id"] = "cust_id";
    MessagesScalarFieldEnum["media"] = "media";
    MessagesScalarFieldEnum["staff_id"] = "staff_id";
    MessagesScalarFieldEnum["customers"] = "customers";
    MessagesScalarFieldEnum["users"] = "users";
})(MessagesScalarFieldEnum = exports.MessagesScalarFieldEnum || (exports.MessagesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(MessagesScalarFieldEnum, {
    name: "MessagesScalarFieldEnum",
    description: undefined,
});
