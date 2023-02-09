"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatesOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TemplatesOrderByRelevanceFieldEnum;
(function (TemplatesOrderByRelevanceFieldEnum) {
    TemplatesOrderByRelevanceFieldEnum["name"] = "name";
    TemplatesOrderByRelevanceFieldEnum["assigned_to"] = "assigned_to";
    TemplatesOrderByRelevanceFieldEnum["type"] = "type";
    TemplatesOrderByRelevanceFieldEnum["active"] = "active";
    TemplatesOrderByRelevanceFieldEnum["page_size"] = "page_size";
    TemplatesOrderByRelevanceFieldEnum["orientation"] = "orientation";
    TemplatesOrderByRelevanceFieldEnum["content"] = "content";
    TemplatesOrderByRelevanceFieldEnum["header"] = "header";
    TemplatesOrderByRelevanceFieldEnum["footer"] = "footer";
    TemplatesOrderByRelevanceFieldEnum["margin_left"] = "margin_left";
    TemplatesOrderByRelevanceFieldEnum["margin_right"] = "margin_right";
    TemplatesOrderByRelevanceFieldEnum["margin_top"] = "margin_top";
    TemplatesOrderByRelevanceFieldEnum["margin_bottom"] = "margin_bottom";
    TemplatesOrderByRelevanceFieldEnum["margin_header"] = "margin_header";
    TemplatesOrderByRelevanceFieldEnum["margin_footer"] = "margin_footer";
})(TemplatesOrderByRelevanceFieldEnum = exports.TemplatesOrderByRelevanceFieldEnum || (exports.TemplatesOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(TemplatesOrderByRelevanceFieldEnum, {
    name: "TemplatesOrderByRelevanceFieldEnum",
    description: undefined,
});
