"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email_templatesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Email_templatesScalarFieldEnum;
(function (Email_templatesScalarFieldEnum) {
    Email_templatesScalarFieldEnum["id"] = "id";
    Email_templatesScalarFieldEnum["created_at"] = "created_at";
    Email_templatesScalarFieldEnum["name"] = "name";
    Email_templatesScalarFieldEnum["assigned_to"] = "assigned_to";
    Email_templatesScalarFieldEnum["type"] = "type";
    Email_templatesScalarFieldEnum["active"] = "active";
    Email_templatesScalarFieldEnum["insert_variable"] = "insert_variable";
    Email_templatesScalarFieldEnum["subject"] = "subject";
    Email_templatesScalarFieldEnum["content"] = "content";
    Email_templatesScalarFieldEnum["header"] = "header";
    Email_templatesScalarFieldEnum["footer"] = "footer";
    Email_templatesScalarFieldEnum["width"] = "width";
    Email_templatesScalarFieldEnum["height"] = "height";
    Email_templatesScalarFieldEnum["media"] = "media";
})(Email_templatesScalarFieldEnum = exports.Email_templatesScalarFieldEnum || (exports.Email_templatesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Email_templatesScalarFieldEnum, {
    name: "Email_templatesScalarFieldEnum",
    description: undefined,
});
