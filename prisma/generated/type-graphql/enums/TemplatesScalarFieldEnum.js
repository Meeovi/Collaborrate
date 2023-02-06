"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TemplatesScalarFieldEnum;
(function (TemplatesScalarFieldEnum) {
    TemplatesScalarFieldEnum["id"] = "id";
    TemplatesScalarFieldEnum["created_at"] = "created_at";
    TemplatesScalarFieldEnum["name"] = "name";
    TemplatesScalarFieldEnum["assigned_to"] = "assigned_to";
    TemplatesScalarFieldEnum["type"] = "type";
    TemplatesScalarFieldEnum["active"] = "active";
    TemplatesScalarFieldEnum["page_size"] = "page_size";
    TemplatesScalarFieldEnum["orientation"] = "orientation";
    TemplatesScalarFieldEnum["content"] = "content";
    TemplatesScalarFieldEnum["header"] = "header";
    TemplatesScalarFieldEnum["footer"] = "footer";
    TemplatesScalarFieldEnum["margin_left"] = "margin_left";
    TemplatesScalarFieldEnum["margin_right"] = "margin_right";
    TemplatesScalarFieldEnum["margin_top"] = "margin_top";
    TemplatesScalarFieldEnum["margin_bottom"] = "margin_bottom";
    TemplatesScalarFieldEnum["margin_header"] = "margin_header";
    TemplatesScalarFieldEnum["margin_footer"] = "margin_footer";
})(TemplatesScalarFieldEnum = exports.TemplatesScalarFieldEnum || (exports.TemplatesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TemplatesScalarFieldEnum, {
    name: "TemplatesScalarFieldEnum",
    description: undefined,
});
