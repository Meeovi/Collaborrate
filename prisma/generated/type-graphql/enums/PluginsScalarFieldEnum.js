"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var PluginsScalarFieldEnum;
(function (PluginsScalarFieldEnum) {
    PluginsScalarFieldEnum["id"] = "id";
    PluginsScalarFieldEnum["created_at"] = "created_at";
    PluginsScalarFieldEnum["name"] = "name";
    PluginsScalarFieldEnum["url"] = "url";
    PluginsScalarFieldEnum["github_link"] = "github_link";
    PluginsScalarFieldEnum["description"] = "description";
    PluginsScalarFieldEnum["logo"] = "logo";
    PluginsScalarFieldEnum["screenshots"] = "screenshots";
    PluginsScalarFieldEnum["last_updated"] = "last_updated";
    PluginsScalarFieldEnum["publisher_name"] = "publisher_name";
    PluginsScalarFieldEnum["agree_terms"] = "agree_terms";
    PluginsScalarFieldEnum["publisher_email"] = "publisher_email";
})(PluginsScalarFieldEnum = exports.PluginsScalarFieldEnum || (exports.PluginsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(PluginsScalarFieldEnum, {
    name: "PluginsScalarFieldEnum",
    description: undefined,
});
