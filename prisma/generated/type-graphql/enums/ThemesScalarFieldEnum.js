"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ThemesScalarFieldEnum;
(function (ThemesScalarFieldEnum) {
    ThemesScalarFieldEnum["id"] = "id";
    ThemesScalarFieldEnum["title"] = "title";
    ThemesScalarFieldEnum["parent_theme"] = "parent_theme";
    ThemesScalarFieldEnum["theme_path"] = "theme_path";
    ThemesScalarFieldEnum["action"] = "action";
    ThemesScalarFieldEnum["website_id"] = "website_id";
    ThemesScalarFieldEnum["websites"] = "websites";
})(ThemesScalarFieldEnum = exports.ThemesScalarFieldEnum || (exports.ThemesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ThemesScalarFieldEnum, {
    name: "ThemesScalarFieldEnum",
    description: undefined,
});
