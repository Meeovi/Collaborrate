"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsOrderByRelevanceFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PluginsOrderByRelevanceFieldEnum;
(function (PluginsOrderByRelevanceFieldEnum) {
    PluginsOrderByRelevanceFieldEnum["name"] = "name";
    PluginsOrderByRelevanceFieldEnum["url"] = "url";
    PluginsOrderByRelevanceFieldEnum["github_link"] = "github_link";
    PluginsOrderByRelevanceFieldEnum["description"] = "description";
    PluginsOrderByRelevanceFieldEnum["logo"] = "logo";
    PluginsOrderByRelevanceFieldEnum["screenshots"] = "screenshots";
    PluginsOrderByRelevanceFieldEnum["publisher_name"] = "publisher_name";
    PluginsOrderByRelevanceFieldEnum["publisher_email"] = "publisher_email";
})(PluginsOrderByRelevanceFieldEnum = exports.PluginsOrderByRelevanceFieldEnum || (exports.PluginsOrderByRelevanceFieldEnum = {}));
TypeGraphQL.registerEnumType(PluginsOrderByRelevanceFieldEnum, {
    name: "PluginsOrderByRelevanceFieldEnum",
    description: undefined,
});
